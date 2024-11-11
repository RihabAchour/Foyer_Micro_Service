package com.example.foyerkaterennada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/blocs")
public class BlocRestAPI {
    @Autowired
    private BlocService blocService;

    // Créer un bloc
    @PostMapping(consumes = MediaType.APPLICATION_XML_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Bloc> createBloc(@RequestBody Bloc bloc) {
        Bloc savedBloc = blocService.createBloc(bloc);
        return ResponseEntity.ok(savedBloc);
    }

    // Obtenir tous les blocs
    @GetMapping
    public ResponseEntity<List<Bloc>> getAllBlocs() {
        List<Bloc> blocs = blocService.getAllBlocs();
        return ResponseEntity.ok(blocs);
    }

    // Obtenir un bloc par son ID
    @GetMapping("/{idBloc}")
    public ResponseEntity<Bloc> getBlocById(@PathVariable Long idBloc) {
        Optional<Bloc> bloc = blocService.getBlocById(idBloc);
        return bloc.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Mettre à jour un bloc
    @PutMapping(value = "/{idBloc}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Bloc> updateBloc(@PathVariable Long idBloc, @RequestBody Bloc blocDetails) {
        Bloc updatedBloc = blocService.updateBloc(idBloc, blocDetails);
        return ResponseEntity.ok(updatedBloc);
    }

    // Supprimer un bloc
    @DeleteMapping(value = "/{idBloc}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Void> deleteBloc(@PathVariable Long idBloc) {
        blocService.deleteBloc(idBloc);
        return ResponseEntity.noContent().build();
    }
}
