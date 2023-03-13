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

    enum deliveryStatus {
        PROCESSING,
        READY_TO_SHIP,
        SHIPPED,
        IN_TRANSIT,
        DELIVERED
    }
    private deliveryStatus status;
    private ArrayList<ItemQuantity> items = new ArrayList<>();
    private Date createdAt;




}