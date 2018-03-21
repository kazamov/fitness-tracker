import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  startExerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.startExerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if(exercise){
          this.ongoingTraining = true;
        }else{
          this.ongoingTraining = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.startExerciseSubscription.unsubscribe();
  }
}
