package com.esprit.microservice.chambre.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Chambre {
    @Id
    @GeneratedValue
    private int id ;
    private int numeroChambre ;
    private TypeChambre typeChambre;

    public Chambre() {
    }

    public Chambre(int numeroChambre, TypeChambre typeChambre) {
        this.numeroChambre = numeroChambre;
        this.typeChambre = typeChambre;
    }

    public int getNumeroChambre() {
        return numeroChambre;
    }

    public void setNumeroChambre(int numeroChambre) {
        this.numeroChambre = numeroChambre;
    }

    public TypeChambre getTypeChambre() {
        return typeChambre;
    }

    public void setTypeChambre(TypeChambre typeChambre) {
        this.typeChambre = typeChambre;
    }

    public int getId() {
        return id;
    }


}
