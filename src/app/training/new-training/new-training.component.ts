import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { MatSelect } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<Exercise[]>;

  constructor(private trainingService: TrainingService,
              private db: AngularFirestore) { }

  ngOnInit() {
    this.exercises = this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            const data = doc.payload.doc.data();
            return {
              id: doc.payload.doc.id,
              name: data.name,
              duration: data.duration,
              calories: data.calories
            };
          })
        })
      );
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
