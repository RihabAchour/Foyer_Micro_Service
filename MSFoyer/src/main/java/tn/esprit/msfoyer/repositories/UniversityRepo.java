package tn.esprit.msfoyer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.msfoyer.entities.university;

public interface UniversityRepo extends JpaRepository<university,Integer> {
}
