package com.example.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reservations")

public class ReservationRestAPI {

    @Autowired
    private ReservationService reservationService;



    @RequestMapping
    public ResponseEntity<List<Reservation>> getAll() {
        return new ResponseEntity<>(reservationService.findAll(), HttpStatus.OK);
    }


}
