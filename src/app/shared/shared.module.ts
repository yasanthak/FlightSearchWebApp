import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
   
  ],
  exports: [
    
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }
