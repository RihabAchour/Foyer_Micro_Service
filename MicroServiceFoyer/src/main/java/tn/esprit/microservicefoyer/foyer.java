package tn.esprit.microservicefoyer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.io.Serial;
import java.io.Serializable;

@Entity

public class foyer implements Serializable {

    @Id
    @GeneratedValue
   private long idfoyer;
   private String nomFoyer;
   private long capaciteFoyer;
    long idUniversite;
    long IdBloc;
    public long getId()
    {
        return idfoyer;
    }
    public String getNomFoyer()
    {
        return nomFoyer;
    }
    public void setNomFoyer(String nomFoyer)
    {
        this.nomFoyer=nomFoyer;
    }


}
