package com.example.crystaloptical.api.dto.data;


import com.example.crystaloptical.model.Item;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ItemQuantityDto {
    private Item item;
    int quantity;
}
