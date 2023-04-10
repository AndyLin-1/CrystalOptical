package com.example.crystaloptical.model.repo;

import com.example.crystaloptical.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findById(Long id);

    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByName(String brand, String name);
    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByBrand(String brand, String name);
    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByPriceDesc(String brand, String name);
    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByPriceAsc(String brand, String name);

    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByRatingDesc(String brand, String name);
    List<Item> findAllByBrandLikeIgnoreCaseAndNameLikeIgnoreCaseOrderByRatingAsc(String brand, String name);






}
