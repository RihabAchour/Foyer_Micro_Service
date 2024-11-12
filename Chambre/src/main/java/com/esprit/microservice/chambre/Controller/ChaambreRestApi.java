package com.esprit.microservice.chambre.Controller;

import com.esprit.microservice.chambre.Entity.Chambre;
import com.esprit.microservice.chambre.Service.ChambreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/chambres")
public class ChaambreRestApi {

    private String title = "hello";

    // Méthode GET pour "hello"
    @GetMapping("/hello")
    public String hello() {
        return title;
    }

    @Autowired
    private ChambreService chambreService;

    // Méthode POST pour créer une chambre
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Chambre> createChambre(@RequestBody Chambre chambre) {
        return new ResponseEntity<>(chambreService.addChambre(chambre), HttpStatus.CREATED);
    }

    // Méthode GET pour récupérer toutes les chambres
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Chambre>> getAllChambres() {
        return new ResponseEntity<>(chambreService.getAllChambres(), HttpStatus.OK);
    }

    // Méthode PUT pour mettre à jour une chambre
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Chambre> updateChambre(@PathVariable(value = "id") int id,
                                                 @RequestBody Chambre chambre) {
        return new ResponseEntity<>(chambreService.updateChambre(id, chambre), HttpStatus.OK);
    }

    // Méthode DELETE pour supprimer une chambre
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteChambre(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(chambreService.deleteChambre(id), HttpStatus.OK);
    }
}

