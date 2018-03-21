import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { MatSelect } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
