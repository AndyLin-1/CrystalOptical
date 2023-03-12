package com.example.crystaloptical.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Item {
    @Id
    @SequenceGenerator(name = "item_sequence", sequenceName = "item_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "item_sequence")
    private Long id;

    /**
     * Attributes based on multiple glasses websites
     * Example: https://www.clearly.ca/eyewear
     */

    private String glassesName;

    private double price;

    /**
     * Brand name of glasses
     * Examples:
     * 1. Clearly Basic
     * 2. Joseph Marc
     * 3. Love
     * 4. Ray-Ban
     */
    private String brand;


    /**
     * Lens Material:
     * 1. Metal
     * 2. Stainless Steel
     * 3. Plastic
     */
    private String lensMaterial;

    /**
     * frameWidth:
     * 1. Small
     * 2. Medium
     * 3. Large
     */
    private String frameSize;

    /**
     * Examples:
     * Rectangle
     * Square
     * Round
     */
    private String frameShape;

    /**
     * Examples:
     * 1. Full Rim
     * 2. Rimless
     * 3. Semi Rimless
     */
    private String rimType;


    private String colour;

    /**
     * Could delete but a lot of size have them.
     * Examples:
     * Men
     * Women
     */
    private String gender;

    private double rating;

    private int itemStock;


    public Item(){}

    public Item(String glassesName, double price, String brand, String frameSize, String frameShape, String rimType, String lensMaterial,
                String colour, String gender, double rating, int itemStock){
        this.glassesName = glassesName;
        this.price = price;
        this.brand = brand;
        this.frameSize = frameSize;
        this.frameShape = frameShape;
        this.rimType = rimType;
        this.lensMaterial = lensMaterial;
        this.colour = colour;
        this.gender = gender;
        this.rating = rating;
        this.itemStock = itemStock;
    }
}
