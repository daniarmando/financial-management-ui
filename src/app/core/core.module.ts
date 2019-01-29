import { CategoryService } from './../categories/category.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';

import { NotAuthorizedComponent } from './not-authorized.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,

    NotAuthorizedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CoreModule { }
