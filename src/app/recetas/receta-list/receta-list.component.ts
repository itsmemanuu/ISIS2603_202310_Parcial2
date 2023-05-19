import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../receta.service';
import { Receta } from '../receta';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {
  recetas: Array<Receta> = [];
  selected: boolean = false;
  recetaSeleccionada!: Receta;
  promedio: string = '';
  opiniones: string = '';



  constructor(private service: RecetaService) { }

  getRecetas(): void {
    this.service.getRecetas().subscribe(recetas => this.recetas = recetas);

  }

  getPromedio(): void {
    let promedio = 0;
    let len = 0;
    let opiniones = 0;
    this.service.getRecetas().subscribe(recetas => recetas.forEach(receta => {
      promedio += receta.estrellas;
      len++;
      opiniones += receta.cantidadOpiniones;
      let x = promedio /  len;
      this.promedio = x.toFixed(2);
      this.opiniones = opiniones.toString();
    }));
  }

  onSelect(receta: Receta): void {
    this.selected = true;
    this.recetaSeleccionada = receta;
  }

  ngOnInit() {
    this.getRecetas();
    this.getPromedio();

  }

}
