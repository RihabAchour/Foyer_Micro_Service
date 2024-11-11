package com.example.foyerkaterennada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class FoyerKaterEnnadaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoyerKaterEnnadaApplication.class, args);
	}
	@Autowired
	private BlocRepository repository;
	@Bean
	ApplicationRunner init() {
		return (args) -> {
// save
			repository.save(new Bloc("Bloc A", 100, 1));  // idFoyer remplacé par un identifiant numérique
			repository.save(new Bloc("Bloc B", 150, 2));
			repository.save(new Bloc("Bloc C", 200, 3));
			repository.save(new Bloc("Bloc D", 180, 4));

			repository.findAll().forEach(System.out::println);
		}
				;}}

