package com.example.crystaloptical.boot.data;

import com.example.crystaloptical.api.controller.UserController;
import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.api.dto.request.UserRegisterRequest;
import com.example.crystaloptical.api.service.AuthService;
import com.example.crystaloptical.api.service.ItemService;
import com.example.crystaloptical.api.service.UserService;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;

import java.util.Random;

@Configuration
public class DemoData {

    private final UserController userController;
    private final UserService userService;
    private final AuthService authService;

    private final ItemService itemService;

    public DemoData(UserController userController, UserService userService, AuthService authService, ItemService itemService){
        this.userController = userController;
        this.userService = userService;
        this.authService = authService;
        this.itemService = itemService;

    }

    @EventListener
    public void appReady(ApplicationReadyEvent event) throws Exception {
        insertDemoUsers();
        insertDemoItems();
    }

    public void insertDemoUsers() throws Exception {
        this.authService.registerAdmin(UserRegisterRequest.builder().email("admin@gmail.com").firstName("admin")
                .lastName("admin").password("password").build());
    }

    public void insertDemoItems() throws Exception {
        String brand;
        String name;
        String color;
        String file;
        //Armani
        brand = "armani";
        //AX1009
        name = "AX1009";
        //Black avif
        color = "black";
        file = "avif";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //Brown avif
        color = "brown";
        file = "avif";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //Red webp
        color = "red";
        file = "webp";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //AX1052
        name = "AX1052";
        //black avif
        color = "black";
        file = "avif";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //grey avif
        color = "grey";
        file = "avif";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //AX1058 gold avif
        name = "AX1058";
        color = "gold";
        file = "avif";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //Burberry
        brand = "burberry";
        //archie
        name = "archie";
        //black avif
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //blue avif
        color = "blue";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //name
        name = "bolton";
        //black avif
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //blue avif
        color = "blue";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //harrington grey webp
        name = "harrington";
        color = "grey";
        file = "webp";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //coach
        brand = "coach";
        //HC5123
        name = "HC5123";
        //black webp
        color = "black";
        file = "webp";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //grey webp
        color = "grey";
        file = "webp";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //HC6129
        name = "HC6129";
        //Brown
        color = "brown";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //orange
        color = "orange";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //red
        color = "red";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //oakley
        brand = "oakley";
        //fuller
        name = "fuller";
        //black
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //grey
        color = "grey";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //holbrook
        name = "holbrook";
        //avif
        file = "avif";
        //black
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //blue
        color = "blue";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //white
        color = "white";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //raybands
        brand = "raybands";
        //aviator
        name = "aviator";
        //webp
        //black
        file = "webp";
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //clubmaster
        name = "clubmaster";
        color = "black";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        //roundmetal
        name = "roundmetal";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
        color = "grey";
        itemService.addItem(ItemAddRequest.builder().name(name).price(generatePrice()).brand(brand).frameSize(generateSize())
                .colour(color).itemStock(100).imagePath(getImagePath(brand, name, color, file)).build());
    }

    private String getImagePath(String brand, String name, String color, String file) {
        return "./assets/glasses/" + brand + "/" + name + "/"
                + brand + "_" + name + "_" + color + "." + file;
    }

    private double generatePrice() {
        double num = Math.random() * 1000; // generate a random double between 0 and 999
        return Math.floor(num * 100) / 100;
    }

    private String generateSize() {
        String[] a = {"Small", "Medium", "Large"};
        Random random = new Random();
        int randomNum = random.nextInt(3);
        return a[randomNum];
    }
}
