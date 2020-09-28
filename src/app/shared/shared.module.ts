import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ElevatorComponent } from './components/graphics/elevator/elevator.component';



@NgModule({
  declarations: [ElevatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ElevatorComponent
  ]
})
export class SharedModule { }
