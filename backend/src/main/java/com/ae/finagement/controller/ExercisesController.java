package com.ae.finagement.controller;

import com.ae.finagement.model.Exercise;
import com.ae.finagement.service.ExercisesService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/exercises")
public class ExercisesController {

    private final ExercisesService exercisesService;

    public ExercisesController(ExercisesService exercisesService) {
        this.exercisesService = exercisesService;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('USER')")
    public Collection<Exercise> getAll() {
        return this.exercisesService.getAll();
    }

    @PostMapping("")
    @PreAuthorize("hasRole('USER')")
    public Collection<Exercise> getAllExercisesByUserId(@Valid @RequestBody Integer userId) {
        return this.exercisesService.getAllByUserId(userId);
    }

    @PostMapping("/add")
    public Exercise add(@Valid @RequestBody Exercise exercise) {
        return this.exercisesService.add(exercise);
    }

}
