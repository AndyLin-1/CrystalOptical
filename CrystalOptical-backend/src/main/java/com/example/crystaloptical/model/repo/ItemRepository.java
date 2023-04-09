package com.example.crystaloptical.model.repo;


import com.example.crystaloptical.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findById(Long id);

    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByName(String brand, String colour, double rating);
    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByBrand(String brand, String colour, double rating);
    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByPriceDesc(String brand, String colour, double rating);
    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByPriceAsc(String brand, String colour, double rating);

    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByRatingDesc(String brand, String colour, double rating);
    List<Item> findAllByBrandLikeIgnoreCaseAndColourLikeIgnoreCaseAndRatingGreaterThanOrderByRatingAsc(String brand, String colour, double rating);






}
