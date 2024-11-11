package tn.esprit.msfoyer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import tn.esprit.msfoyer.entities.university;
import tn.esprit.msfoyer.repositories.UniversityRepo;

@SpringBootApplication
@EnableDiscoveryClient
public class MsFoyerApplication {
    @Autowired
    private UniversityRepo universityRepository;

    public static void main(String[] args) {
        SpringApplication.run(MsFoyerApplication.class, args);
    }
    @Bean
    ApplicationRunner init() {
        return args -> {
            // Sauvegarder des universités
            universityRepository.save(new university("Université de Tunis", "Tunis, Tunisie", 1));
            universityRepository.save(new university("Université de Sfax", "Sfax, Tunisie", 2));
            universityRepository.save(new university("Université de Monastir", "Monastir, Tunisie", 3));

            // Afficher toutes les universités sauvegardées
            universityRepository.findAll().forEach(System.out::println);
        };
    }
}
