package tn.esprit.msfoyer.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class university {
    @Id
    @GeneratedValue
    private int id;
    private String nomuniversite;
    private String adresse;
    private int idFoyer;

    public int getId() {
        return id;
    }

    public String getNomuniversite() {
        return nomuniversite;
    }

    public void setNomuniversite(String nomuniversite) {
        this.nomuniversite = nomuniversite;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getIdFoyer() {
        return idFoyer;
    }

    public void setIdFoyer(int idFoyer) {
        this.idFoyer = idFoyer;
    }

    public university() {
    }

    public university(String nomuniversite, String adresse, int idFoyer) {
        this.nomuniversite = nomuniversite;
        this.adresse = adresse;
        this.idFoyer = idFoyer;
    }
}
