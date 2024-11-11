package com.example.foyerkaterennada;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bloc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idBloc;
    String nomBloc;
    long capaciteBloc;
    long idFoyer;


    public Bloc(String nomBloc, long capaciteBloc, long idFoyer) {
        this.nomBloc = nomBloc;
        this.capaciteBloc = capaciteBloc;
        this.idFoyer = idFoyer; // Assurez-vous que idFoyer est bien un long
    }

}
