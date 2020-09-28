import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

import { IntroComponent } from './index/components/intro/intro.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './index/components/about/about.component';


const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    IndexComponent,
    IntroComponent,
    AboutComponent
  ]
})

export class RoutesModule { }
