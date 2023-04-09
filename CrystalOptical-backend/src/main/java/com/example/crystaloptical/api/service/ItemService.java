package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.request.ItemAddRequest;
import com.example.crystaloptical.model.Item;
import com.example.crystaloptical.model.repo.ItemRepository;
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


    public ResponseEntity<Item> getItem(Long id) throws Exception {
        if(itemRepository.findById(id).isEmpty()){
            throw new Exception("Item Does Not Exist");
        }
        return ResponseEntity.ok().body(itemRepository.findById(id).get());
    }

    public ResponseEntity<Integer> getStock(Long id) throws Exception {
        if(itemRepository.findById(id).isEmpty()){
            throw new Exception("Item Does Not Exist");
        }
        Integer stock = itemRepository.findById(id).get().getItemStock();
        return ResponseEntity.ok(stock);
    }

    public void editStock(Long id, int number) throws Exception {
         Item item =  itemRepository.findById(id).get();
        if(itemRepository.findById(id).isEmpty()){
            throw new Exception("Item Does Not Exist");
        }
        if(item.getItemStock() - number < 0) {
            throw new Exception("Cannot Make Purchase");
        }
        item.setItemStock(item.getItemStock() - number);
        itemRepository.save(item);
    }

    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> list = itemRepository.findAll().stream().toList();
        return ResponseEntity.ok(list);
    }

    public ResponseEntity<List<Item>> getAllItemsByFilter(String brand, String color, double rating) {
        List<Item> list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByName(brand, color, rating).stream().toList();
        return ResponseEntity.ok(list);
    }


    public ResponseEntity<Double> rateItem(Long id, int rating) throws Exception {
        if(itemRepository.findById(id).isEmpty()){
            throw new Exception("Item Does Not Exist");
        }
        Item item = itemRepository.findById(id).get();
        item.setRatingScore(item.getRatingScore() + rating);
        item.setRatingNumber(item.getRatingNumber() + 1);
        item.calculateRating();
        itemRepository.save(item);
        return ResponseEntity.ok(item.getRating());
    }

    public ResponseEntity<List<Item>> getAllItemsByFilterSorted(String brand, String color, double rating, String sortby) {
        List<Item> list;
        if(sortby.equalsIgnoreCase("brand")) {
            list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByBrand(brand, color, rating).stream().toList();
        } else if(sortby.equalsIgnoreCase("priceDesc")) {
            list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByPriceDesc(brand, color, rating).stream().toList();
        } else if(sortby.equalsIgnoreCase("priceAsc")) {
            list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByPriceAsc(brand, color, rating).stream().toList();
        }else if(sortby.equalsIgnoreCase("ratingDesc")) {
            list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByRatingDesc(brand, color, rating).stream().toList();
        } else {
            list = itemRepository.findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByRatingAsc(brand, color, rating).stream().toList();
        }
        return ResponseEntity.ok(list);
    }
}
