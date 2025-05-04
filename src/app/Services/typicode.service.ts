import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypicodeInterface } from '../interfaces/typicode-interface';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<TypicodeInterface[]> {
    return this.http.get<TypicodeInterface[]>(this.apiUrl);
  }
}


// Este servicio se encarga de hacer la llamada a la API y obtener los datos de los usuarios. Utiliza el HttpClient de Angular para hacer la petición GET a la URL de la API y devuelve un Observable con los datos obtenidos. La interfaz TypicodeInterface se utiliza para definir la estructura de los datos que se obtienen de la API y que se utilizan en el componente. De esta forma, se asegura que los datos que se obtienen cumplen con la estructura esperada y se evita tener que hacer comprobaciones adicionales en el componente.