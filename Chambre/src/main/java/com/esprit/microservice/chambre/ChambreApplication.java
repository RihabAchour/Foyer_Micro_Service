package com.esprit.microservice.chambre;

import com.esprit.microservice.chambre.Entity.Chambre;
import com.esprit.microservice.chambre.Entity.TypeChambre;
import com.esprit.microservice.chambre.Repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
@EnableDiscoveryClient
@SpringBootApplication
public class ChambreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChambreApplication.class, args);
	}

	@Autowired
	private ChambreRepository chambRepo;
	@Bean
	ApplicationRunner init(){
		return (args -> {
			chambRepo.save(new Chambre(12526, TypeChambre.Simple));
			chambRepo.save(new Chambre(192, TypeChambre.Double));
			chambRepo.save(new Chambre(126, TypeChambre.Double));

		});
	}
}
