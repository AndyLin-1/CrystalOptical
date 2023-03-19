package com.example.crystaloptical.boot.config.security;

import com.example.crystaloptical.api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class WebSecurityConfig {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurityConfig(BCryptPasswordEncoder bCryptPasswordEncoder, UserService userService) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userService = userService;
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) ->
                web.ignoring()
                        .antMatchers(HttpMethod.GET, "/actuator/**", "/api/v1/**")
                        .antMatchers(
                                "/swagger-resources/**",
                                "/swagger-ui.html",
                                "/configuration/**",
                                "/webjars/**",
                                "/static/**",
                                "/public/**");
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // session
        http.csrf().disable();
        http.cors();
        http.formLogin().disable().httpBasic().disable();

        // auth
        http.authorizeRequests()
                // public
                .antMatchers(HttpMethod.GET, "/api/v1/**")
                .permitAll()
                .antMatchers(
                        "/api/v1/user/register",
                        "/api/v1/user/register/confirm",
                        "/api/v1/user/login",
                        "/ws/**",
                        "/swagger-ui*/**")
                .permitAll()
                // private
                .anyRequest()
                .authenticated();

//        http.authenticationProvider(daoAuthenticationProvider());
//        http.addFilterBefore(
//                authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//
//        // jwt
//        http.sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
//                .maximumSessions(1)
//                .maxSessionsPreventsLogin(false)
//                .and()
//                .sessionFixation()
//                .migrateSession()
//                .and()
//                .oauth2ResourceServer()
//                .jwt()
//                .jwtAuthenticationConverter(jwtAuthenticationConverter());

        return http.build();
    }



    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userService);
        return provider;
    }
}
