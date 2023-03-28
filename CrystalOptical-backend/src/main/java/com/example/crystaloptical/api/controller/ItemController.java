package com.example.crystaloptical.api.controller;

import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.api.service.ItemService;
import com.example.crystaloptical.model.Item;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

}
