package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
public class ItemAddRequest {

    @NotEmpty
    private String name;

    private double price;

    @NotEmpty
    private String brand;

    @NotEmpty
    private String frameSize;

    @NotEmpty
    private String colour;

    private int itemStock;

    private String imagePath;
}
