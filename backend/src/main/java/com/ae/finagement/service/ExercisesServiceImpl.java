package com.ae.finagement.service;

import com.ae.finagement.model.Exercise;
import com.ae.finagement.repository.ExercisesRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ExercisesServiceImpl implements ExercisesService {

    private final ExercisesRepository exercisesRepository;

    public ExercisesServiceImpl(ExercisesRepository exercisesRepository) {
        this.exercisesRepository = exercisesRepository;
    }

    @Override
    public Collection<Exercise> getAll() {
        return this.exercisesRepository.findAll();
    }

    @Override
    public Collection<Exercise> getAllByUserId(Integer userId) {
        Collection<Exercise> exercises = this.exercisesRepository.findAll();
        return exercises;
    }

    @Override
    public Exercise add(Exercise exercise) {
        return this.exercisesRepository.save(exercise);
    }
}
