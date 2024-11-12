package com.esprit.microservice.chambre.Service;

import com.esprit.microservice.chambre.Entity.Chambre;
import com.esprit.microservice.chambre.Repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreService {
    @Autowired
    private ChambreRepository chambreRepository;
    public Chambre addChambre(Chambre chambre){
        return chambreRepository.save(chambre);
    }
    public Chambre updateChambre(int id,Chambre chambre) {
        if (chambreRepository.findById(id).isPresent()) {
            Chambre exsistingChambre = chambreRepository.findById(id).get();
            exsistingChambre.setNumeroChambre(chambre.getNumeroChambre());
            exsistingChambre.setTypeChambre(chambre.getTypeChambre());
            return chambreRepository.save(exsistingChambre);
        } else
            return null;

    } public List<Chambre> getAllChambres() {
        return chambreRepository.findAll();
    }
    public String deleteChambre(int id ){
        if (chambreRepository.findById(id).isPresent()) {
            chambreRepository.deleteById(id);
            return "chambre supprime ";}else
                return "chambre non supprime";

        }


}
