import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';
import { RecetaListComponent } from './receta-list/receta-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetaDetailComponent, RecetaListComponent],
  exports: [RecetaDetailComponent, RecetaListComponent]
})
export class RecetasModule { }
