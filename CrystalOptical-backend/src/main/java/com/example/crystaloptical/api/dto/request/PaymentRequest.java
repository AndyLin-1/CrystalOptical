package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
public class PaymentRequest {

    @NotEmpty
    private String name;

    private Long cardNumber;

    private int expiryMonth;
    private int expiryYear;

    private int securityCode;

}
