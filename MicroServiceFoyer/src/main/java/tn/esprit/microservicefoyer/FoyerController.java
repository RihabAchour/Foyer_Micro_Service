package tn.esprit.microservicefoyer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class FoyerController {
    @Autowired
    FoyerService foyerService;
    private String test="hello ";
    @GetMapping("/test")
    public String sayHello(){
        return test;
    }


    @RequestMapping
    public ResponseEntity<List<foyer>> getAll() {
        return new ResponseEntity<>(foyerService.findAll(), HttpStatus.OK);
    }
}
