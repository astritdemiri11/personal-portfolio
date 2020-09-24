import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [HeaderComponent, LogoComponent, NavBarComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
