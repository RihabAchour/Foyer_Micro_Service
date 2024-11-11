package tn.esprit.msfoyer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.msfoyer.services.UniversityService;
import tn.esprit.msfoyer.entities.university;

import java.util.List;

@RestController
@RequestMapping
public class UniversityRestAPI {
    @Autowired
    private UniversityService universityService;



    @RequestMapping
    public ResponseEntity<List<university>> getAll() {
        return new ResponseEntity<>(universityService.findAll(), HttpStatus.OK);
    }



}
