package com.example.crystaloptical.api.controller;
import com.example.crystaloptical.api.service.ItemService;
import com.example.crystaloptical.model.Item;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/item")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService){
        this.itemService = itemService;
    }

    @GetMapping("/stock/{id}")
    public ResponseEntity<Integer> getStock(@PathVariable Long id) throws Exception {
        return itemService.getStock(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItem(@PathVariable Long id) throws Exception {
        return itemService.getItem(id);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Item>> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/list/{brand}/{name}")
    public ResponseEntity<List<Item>> getAllItemsByFilter(@PathVariable String brand, @PathVariable String name){
        if(brand.equals("*")) {
            brand = "";
        }
        if(name.equals("*")){
            name = "";
        }
        return itemService.getAllItemsByFilter(brand, name);
    }

    @GetMapping("/list/{brand}/{name}/{sortby}")
    public ResponseEntity<List<Item>> getAllItemsByFilterSorted(@PathVariable String brand, @PathVariable String name, @PathVariable String sortby){
        if(brand.equals("*")) {
            brand = "";
        }
        if(name.equals("*")){
            name = "";
        }
        if(sortby.equals("*")){
            sortby = "";
        }
        return itemService.getAllItemsByFilterSorted(brand, name, sortby);
    }

    @GetMapping("/rate/{id}/{rating}")
    public ResponseEntity<Double> rateItem(@PathVariable Long id, @PathVariable @Valid int rating) throws Exception {
        return itemService.rateItem(id, rating);
    }

}
