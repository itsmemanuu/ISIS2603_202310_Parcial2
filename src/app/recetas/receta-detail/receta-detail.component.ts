import { Component, Input, OnInit } from '@angular/core';
import { RecetaService } from '../receta.service';
import { Receta } from '../receta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {
  recetaID!: number;
  @Input() receta!: Receta;

  constructor(private route: ActivatedRoute, private service: RecetaService) { }

  getReceta(): void {
    this.service.getReceta(this.recetaID).subscribe(receta => this.receta = receta);
  }

  ngOnInit() {
    if(this.receta == undefined){
      this.recetaID = +this.route.snapshot.paramMap.get('id')!;
      if(this.recetaID){
        this.getReceta();
      }
    }
  }
}
