import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { RoutesModule } from './routes/routes.module';



@NgModule({
  imports: [
    SharedModule,
    RoutesModule
  ]
})
export class DefaultModule { }
