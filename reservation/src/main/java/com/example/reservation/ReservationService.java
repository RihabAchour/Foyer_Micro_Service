package com.example.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ReservationService {
    @Autowired
    ReservationRepository repository;

    public List<Reservation> findAll(){
        return repository.findAll();

    }
}
