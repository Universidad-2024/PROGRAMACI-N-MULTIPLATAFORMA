import { Component } from '@angular/core';
import { Registro } from 'src/app/models/registro.model';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  guardados: Registro[] = [];

  constructor(
    public dataLocal: DataLocalService
  ) {}

  async abrirRegistro(registro: Registro) {
    await this.dataLocal.abrirRegistro(registro);
  }

}
