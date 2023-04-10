package com.example.crystaloptical.api.controller;

import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.api.dto.response.MessageResponse;
import com.example.crystaloptical.api.service.ItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    private final ItemService itemService;

    public AdminController(ItemService itemService){
        this.itemService = itemService;
    }

    @PostMapping("/addItem")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<MessageResponse> addItem(@Valid @RequestBody ItemAddRequest itemAddRequest){
        return itemService.addItem(itemAddRequest);
    }

}
