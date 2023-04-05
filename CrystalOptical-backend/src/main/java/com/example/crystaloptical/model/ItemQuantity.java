package com.example.crystaloptical.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Used to store Item and Quantity in Orders
 */
@Getter
@Setter
@Entity
public class ItemQuantity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long itemId;
    int quantity;

    public ItemQuantity() {}
    
    public ItemQuantity (Long itemId, int quantity) {
        this.itemId = itemId;
        this.quantity = quantity;
    }

}