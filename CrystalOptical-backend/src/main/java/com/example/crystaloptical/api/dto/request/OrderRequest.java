package com.example.crystaloptical.api.dto.request;

import com.example.crystaloptical.api.dto.data.ItemQuantityDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
public class OrderRequest {

    //user ordering
    private long userId;

    //Order
    private List<ItemQuantityDto> order;

    private PaymentRequest paymentRequest;

    private String address;



}
