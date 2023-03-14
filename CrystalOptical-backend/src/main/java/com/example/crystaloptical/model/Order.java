package com.example.crystaloptical.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.*;


@Getter
@Setter
@Entity
public class Order {

    @Id
    @SequenceGenerator(name = "order_sequence", sequenceName = "order_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_sequence")
    private int id;

    public enum deliveryStatus {
        PROCESSING,
        READY_TO_SHIP,
        SHIPPED,
        IN_TRANSIT,
        DELIVERED
    }
    // Shipping address will be stored in users' information
    private Users customer;
    private deliveryStatus status;
    private ArrayList<ItemQuantity> items = new ArrayList<>();
    private Date createdAt;

    public Order () {}

    public int getId() {return id; }
    public Users getCustomer () { return customer; }
    public deliveryStatus getStatus () { return status; }
    public Date getCreationDate () { return createdAt; }
    public ArrayList<ItemQuantity> getOrderList () { return items; }
    

    public Order (Users customer, ArrayList<ItemQuantity> items, Date createdAt, deliveryStatus status) {
        this.customer = customer;
        this.items = items;
        this.createdAt = createdAt;
        this.status = status;
    }





}