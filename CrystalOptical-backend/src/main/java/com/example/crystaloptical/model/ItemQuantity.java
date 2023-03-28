package com.example.crystaloptical.model;

/**
 * Used to store Item and Quantity in Orders
 */
public class ItemQuantity {
    Item item;
    int quantity;

    public ItemQuantity() {}
    
    public ItemQuantity (Item item, int quantity) {
        this.item = item;
        this.quantity = quantity;
    }

}