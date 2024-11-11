package com.example.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
@EnableDiscoveryClient
public class ReservationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservationApplication.class, args);
	}
	@Autowired
	private ReservationRepository reservationRepository;
	@Bean
	ApplicationRunner init() {
		return args -> {
			// Sauvegarder des universités
			reservationRepository.save(new Reservation(1, LocalDate.of(2023, 9, 1), true, 150));
			reservationRepository.save(new Reservation(2, LocalDate.of(2024, 9, 1), false, 200));
			reservationRepository.save(new Reservation(3, LocalDate.of(2025, 9, 1), true, 120));

			// Afficher toutes les universités sauvegardées
			reservationRepository.findAll().forEach(System.out::println);
		};
	}
}
