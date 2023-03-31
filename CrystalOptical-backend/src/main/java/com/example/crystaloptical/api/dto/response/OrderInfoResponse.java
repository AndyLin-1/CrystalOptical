package com.example.crystaloptical.api.dto.response;

import com.example.crystaloptical.model.ItemQuantity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
public class OrderInfoResponse {

    private long orderId;
    private long userId;
    private List<ItemQuantity> order;
}
