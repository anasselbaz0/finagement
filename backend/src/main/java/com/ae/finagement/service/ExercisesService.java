package com.ae.finagement.service;

import com.ae.finagement.model.Exercise;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public interface ExercisesService {

    Collection<Exercise> getAll();

    Collection<Exercise> getAllByUserId(Integer userId);

    Exercise add(Exercise exercise);
}
