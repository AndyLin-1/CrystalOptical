package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.data.ItemQuantityDto;
import com.example.crystaloptical.api.dto.request.OrderRequest;
import com.example.crystaloptical.api.dto.response.OrderInfoResponse;
import com.example.crystaloptical.model.ItemQuantity;
import com.example.crystaloptical.model.Order;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.repo.OrderRepository;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.example.crystaloptical.model.Order.deliveryStatus.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository){
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<OrderInfoResponse> sendOrder(OrderRequest orderRequest) {
        Order order = new Order();
        Users user = userRepository.findById(orderRequest.getUserId()).get();
        order.setUsers(user);
        List<ItemQuantity> itemQuantityArrayList = new ArrayList<>();
        //Convert ItemQuanitty Dto to item quantities
        for(ItemQuantityDto orderItem : orderRequest.getOrder()){
            ItemQuantity i = new ItemQuantity();
            i.setItemId(orderItem.getItemId());
            i.setQuantity(orderItem.getQuantity());
            itemQuantityArrayList.add(i);
        }

        order.setItems(itemQuantityArrayList);
        order.setStatus(PROCESSING);
        System.out.println(order.getId());
        orderRepository.save(order);
        OrderInfoResponse orderInfoResponse =  OrderInfoResponse.builder().orderId(order.getId()).userId(order.getUsers().getId()).order(order.getItems()).build();
        return ResponseEntity.ok(orderInfoResponse);
    }

    public ResponseEntity<OrderInfoResponse> getOrderInfo(Long id) throws Exception {
        if(orderRepository.findOrderById(id).isEmpty()){
            throw new Exception("Order does not exist with id " + id);
        }
        Order order = orderRepository.findOrderById(id).get();
        OrderInfoResponse orderInfoResponse =  OrderInfoResponse.builder().orderId(order.getId()).userId(order.getUsers().getId()).order(order.getItems()).build();
        return ResponseEntity.ok(orderInfoResponse);
    }
}
