package com.example.crystaloptical.api.controller;

import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.api.dto.request.OrderRequest;
import com.example.crystaloptical.api.dto.response.OrderInfoResponse;
import com.example.crystaloptical.api.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("api/v1/order")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }


    @PostMapping("/order")
    public ResponseEntity<OrderInfoResponse> sendOrder(@Valid @RequestBody OrderRequest orderRequest){
        return orderService.sendOrder(orderRequest);
    }

    @GetMapping("/orderinfo/{id}")
    public ResponseEntity<OrderInfoResponse> getOrder(@PathVariable Long id) throws Exception {
        return orderService.getOrderInfo(id);
    }

}
