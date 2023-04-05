package com.example.crystaloptical.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@Entity
@Table(name="CUSTOMER_ORDER")
public class Order {

    @Id
    @SequenceGenerator(name = "order_sequence", sequenceName = "order_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_sequence")
    private long id;

    public enum deliveryStatus {
        PROCESSING,
        READY_TO_SHIP,
        SHIPPED,
        IN_TRANSIT,
        DELIVERED
    }

    // Shipping address will be stored in users' information
    @OneToOne
    @JoinTable(
            name = "order_list",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Users users;
    private deliveryStatus status;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "item_list",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"))
    @MapKey(name = "itemId")
    private List<ItemQuantity> items;

    @CreationTimestamp
    private Date createdAt;

    public Order () {}
    public Order (Users users, ArrayList<ItemQuantity> items, deliveryStatus status) {
        this.users = users;
        this.items = items;
        this.status = status;
    }
}

