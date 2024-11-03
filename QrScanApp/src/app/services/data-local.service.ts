import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Registro } from '../models/registro.model';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor(
    private navCtrl: NavController
  ) { 
    this.cargarRegistros();
  }

  async guardarRegistro(text: string) {

    await this.cargarRegistros();
    this.guardados.unshift(new Registro(text));

    await Preferences.set({
      key: 'registros',
      value: JSON.stringify(this.guardados)
    });

    this.abrirRegistro(this.guardados[0]);

  }

  async cargarRegistros() {
    const data = await Preferences.get({ key: 'registros' });
    this.guardados = data.value ? JSON.parse(data.value) : [];
  }


  async abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/tabs/tab2');

    switch (registro.type) {
      case 'http':
        await Browser.open({ url: registro.text });
        break;
    }

  }
}
