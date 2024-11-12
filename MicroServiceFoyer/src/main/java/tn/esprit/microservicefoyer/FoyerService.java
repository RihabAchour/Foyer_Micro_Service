package tn.esprit.microservicefoyer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class FoyerService {
    @Autowired
    FoyerRepository foyerRepository;
    public List<foyer> findAll(){
        return foyerRepository.findAll();

    }
}