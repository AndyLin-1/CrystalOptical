package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.data.ItemQuantityDto;
import com.example.crystaloptical.api.dto.request.OrderRequest;
import com.example.crystaloptical.api.dto.request.PaymentRequest;
import com.example.crystaloptical.api.dto.response.OrderInfoResponse;
import com.example.crystaloptical.model.ItemQuantity;
import com.example.crystaloptical.model.Order;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.repo.ItemRepository;
import com.example.crystaloptical.model.repo.OrderRepository;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.example.crystaloptical.model.Order.deliveryStatus.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    private final ItemService itemService;
    private final ItemRepository itemRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository, ItemService itemService, ItemRepository itemRepository){
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.itemService = itemService;
        this.itemRepository = itemRepository;

    }

    public ResponseEntity<OrderInfoResponse>  sendOrder(OrderRequest orderRequest) throws Exception {
        if(!verifyPayment(orderRequest.getPaymentRequest())){
            throw new Exception("Payment method is invalid");
        }
        Order order = new Order();
        Users user = userRepository.findById(orderRequest.getUserId()).get();
        order.setUsers(user);
        List<ItemQuantity> itemQuantityArrayList = new ArrayList<>();
        //Convert ItemQuantity Dto to item quantities
        for(ItemQuantityDto orderItem : orderRequest.getOrder()){
            ItemQuantity i = new ItemQuantity();
            i.setItemId(orderItem.getItem().getId());
            i.setQuantity(orderItem.getQuantity());
            itemQuantityArrayList.add(i);
            itemService.editStock(orderItem.getItem().getId(), orderItem.getQuantity());
        }

        order.setItems(itemQuantityArrayList);
        order.setStatus(PROCESSING);
        order.setAddress(orderRequest.getAddress());
        System.out.println(order.getId());
        orderRepository.save(order);
        return getOrderInfo(order.getId());
    }

    private boolean verifyPayment(PaymentRequest paymentRequest){
//        if(!paymentRequest.getCardNumber().equals("1111222233334444")) {
//            System.out.println("1");
//            return false;
//        } else if(!paymentRequest.getName().equals("test name")) {
//            System.out.println("2");
//            return false;
//        } else if(paymentRequest.getExpiryYear() <= 22) {
//            System.out.println("3");
//            return false;
//        } else if(paymentRequest.getExpiryYear() == 22 && paymentRequest.getExpiryMonth() < 4){
//            System.out.println("4");
//            return false;
//        }
        return true;
    }

    public ResponseEntity<OrderInfoResponse> getOrderInfo(Long id) throws Exception {
        if(!orderRepository.findOrderById(id).isPresent()){
            throw new Exception("Order does not exist with id " + id);
        }
        Order order = orderRepository.findOrderById(id).get();
        //Build ItemQuantityDto
        List<ItemQuantityDto> list = new ArrayList<>();
        for(ItemQuantity item : order.getItems()) {
            ItemQuantityDto add = ItemQuantityDto.builder().item(this.itemRepository.findById(item.getItemId()).get()).quantity(item.getQuantity()).build();
            list.add(add);
        }
        OrderInfoResponse orderInfoResponse =  OrderInfoResponse.builder().orderId(order.getId()).userId(order.getUsers().getId()).order(list).address(order.getAddress()).build();
        return ResponseEntity.ok(orderInfoResponse);
    }

}
