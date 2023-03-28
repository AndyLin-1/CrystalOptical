package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.model.Item;
import com.example.crystaloptical.model.repo.ItemRepository;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public ResponseEntity<String> addItem(ItemAddRequest itemAddRequest){
        Item item = new Item();
        item.setName(itemAddRequest.getName());
        item.setPrice(itemAddRequest.getPrice());
        item.setBrand(itemAddRequest.getBrand());
        item.setFrameSize(itemAddRequest.getFrameSize());
        item.setColour(itemAddRequest.getColour());
        item.setItemStock(itemAddRequest.getItemStock());
        itemRepository.save(item);
        return ResponseEntity.ok().body("Success");
    }



    public ResponseEntity<Integer> getStock(Long id) throws Exception {
        if(!itemRepository.findById(id).isPresent()){
            throw new Exception("Item Does Not Exist");
        }
        Integer stock = itemRepository.findById(id).get().getItemStock();
        return ResponseEntity.ok(stock);
    }

    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> list = itemRepository.findAll().stream().toList();
        return ResponseEntity.ok(list);
    }
}
