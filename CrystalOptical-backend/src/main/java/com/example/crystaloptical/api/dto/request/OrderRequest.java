package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


import java.util.Date;
import java.util.ArrayList;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.ItemQuantity;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
public class OrderRequest {

    @NotEmpty(message = "You need to purchase at least one item")
    private ArrayList<ItemQuantity> items = new ArrayList<>();

    private Users customer;

    @NotEmpty(message = "Must be requested at a valid date/time")
    private Date requestedAt = new Date();

    /**
        Will add variable for login validation later on
        Will add variable for payment details later on 
    */

}
