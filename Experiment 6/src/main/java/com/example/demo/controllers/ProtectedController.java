package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ProtectedController {

    @GetMapping("/protected")
    public Map<String, String> getProtectedData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "You have successfully accessed a protected route!");
        response.put("status", "success");
        return response;
    }
}
