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

    @GetMapping("/list")
    public ResponseEntity<List<Item>> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/list/{brand}/{color}/{rating}")
    public ResponseEntity<List<Item>> getAllItemsByFilter(@PathVariable String brand, @PathVariable String color, @PathVariable double rating){
        return itemService.getAllItemsByFilter(brand, color, rating);
    }

    @GetMapping("/list/{brand}/{color}/{rating}/{sortby}")
    public ResponseEntity<List<Item>> getAllItemsByFilterSorted(@PathVariable String brand, @PathVariable String color, @PathVariable double rating,
                                                                @PathVariable String sortby){
        return itemService.getAllItemsByFilterSorted(brand, color, rating, sortby);
    }

    @PostMapping("/rate/{id}/{rating}")
    public ResponseEntity<Double> rateItem(@PathVariable Long id, @PathVariable @Valid int rating) throws Exception {
        return itemService.rateItem(id, rating);
    }

}
