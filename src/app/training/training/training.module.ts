import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingsComponent } from '../past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../current-training/current-training.component';
import { StopTrainingComponent } from '../current-training/stop-training.component';
import { MaterialModule } from '../../material.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    CurrentTrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFirestoreModule
  ],
  entryComponents: [
    StopTrainingComponent
  ]
})
export class TrainingModule {

}
