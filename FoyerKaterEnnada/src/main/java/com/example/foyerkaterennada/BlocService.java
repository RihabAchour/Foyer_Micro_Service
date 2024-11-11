package com.example.foyerkaterennada;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlocService {
    @Autowired
    private BlocRepository blocRepository;

    // Créer un nouveau bloc
    public Bloc createBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    // Obtenir tous les blocs
    public List<Bloc> getAllBlocs() {
        return blocRepository.findAll();
    }

    // Obtenir un bloc par son ID
    public Optional<Bloc> getBlocById(Long idBloc) {
        return blocRepository.findById(idBloc);
    }

    // Mettre à jour un bloc
    public Bloc updateBloc(Long idBloc, Bloc blocDetails) {
        return blocRepository.findById(idBloc)
                .map(bloc -> {
                    bloc.setNomBloc(blocDetails.getNomBloc());
                    bloc.setCapaciteBloc(blocDetails.getCapaciteBloc());
                    bloc.setIdFoyer(blocDetails.getIdFoyer());
                    return blocRepository.save(bloc);
                })
                .orElseThrow(() -> new RuntimeException("Bloc not found with id " + idBloc));
    }

    // Supprimer un bloc
    public void deleteBloc(Long idBloc) {
        blocRepository.deleteById(idBloc);
    }


}
