package com.esprit.microservice.chambre.Repository;

import com.esprit.microservice.chambre.Entity.Chambre;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ChambreRepository extends JpaRepository <Chambre,Integer>{
}
