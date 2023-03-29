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
    private long id;

    /**
     * Attributes based on multiple glasses websites
     * Example: https://www.clearly.ca/eyewear
     */

    private String name;

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
     * frameWidth:
     * 1. Small
     * 2. Medium
     * 3. Large
     */
    private String frameSize;
    private String colour;

    private double rating;

    private int ratingScore;
    private int ratingNumber;

    private int itemStock;

    //Path to the image
    private String imagePath;


    public Item(){}

    public Item(String name, double price, String brand, String frameSize, String colour,
                double rating, int itemStock){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.frameSize = frameSize;
        this.colour = colour;
        this.rating = rating;
        this.itemStock = itemStock;
    }

    public void calculateRating(){
        this.rating = ((double) ratingScore/ (double) ratingNumber);
    }

}
