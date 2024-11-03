import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor() { }

  guardarRegistro(text: string) {
    const nuevoRegistro = new Registro(text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);

  }
}
