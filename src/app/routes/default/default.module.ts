import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoutesModule } from './routes/routes.module';



@NgModule({
  imports: [
    CommonModule,
    RoutesModule
  ]
})
export class DefaultModule { }
