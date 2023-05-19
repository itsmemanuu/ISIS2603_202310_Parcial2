import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url = 'https://gist.githubusercontent.com/VivianGomez/e65c117a4809355fbb53c37cb8fe1d44/raw/d0482c083962cad2319b3640250da0194d341dc6/recipes'

constructor(private http: HttpClient) { }
getRecetas(): Observable<Receta[]> {
  return this.http.get<Receta[]>(this.url);
}

getReceta(id: number): Observable<Receta> {
  return this.http.get<Receta>(this.url + '/' + id);
}

}
