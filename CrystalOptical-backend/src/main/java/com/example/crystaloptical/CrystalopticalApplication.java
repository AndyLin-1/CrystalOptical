package com.example.crystaloptical;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableScheduling
@RestController
@Slf4j
@ComponentScan(basePackages = "com.example")
public class CrystalopticalApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrystalopticalApplication.class, args);
    }

}
