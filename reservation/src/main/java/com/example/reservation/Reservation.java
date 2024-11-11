package com.example.reservation;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;

@RequiredArgsConstructor
@Entity
@Getter
@Setter
@AllArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue
    private  int id;

    private LocalDate anneeUniversitaire;
    private boolean estValide;
    private int etudiants;
}
