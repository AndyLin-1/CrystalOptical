package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ItemAddRequest {

    private String name;

    private double price;

    private String brand;

    private String frameSize;

    private String colour;

    private int itemStock;

//    private String imagePath;
}
