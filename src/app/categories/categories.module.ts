import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories/categories.component';
import { MatMenuModule, MatIconModule, MatButtonModule, MatTableModule } from '@angular/material';
import { CategoriesRoutingModule } from './categories-routing.module';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { RegisterSubcategoryComponent } from './register-subcategory/register-subcategory.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    RegisterCategoryComponent,
    RegisterSubcategoryComponent
  ],
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,

    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
