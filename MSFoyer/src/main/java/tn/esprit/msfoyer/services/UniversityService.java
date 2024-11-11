package tn.esprit.msfoyer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.msfoyer.repositories.UniversityRepo;
import tn.esprit.msfoyer.entities.university;

import java.util.List;

@Service
public class UniversityService {
    @Autowired
    private UniversityRepo universityRepo;


    public List<university> findAll(){
        return universityRepo.findAll();

    }

}
