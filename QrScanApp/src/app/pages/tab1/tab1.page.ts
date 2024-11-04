import { Component } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerScanResult } from '@capacitor/barcode-scanner';
import { DataLocalService } from 'src/app/services/data-local.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private dataLocalService: DataLocalService,
    private globalStateService: GlobalStateService
  ) {}

  async scanBarcode(val?: number) {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1,
        scanText: 'Escanear',
      });
      return result.ScanResult;

    } catch (error) {
      throw error;
    }
  }

  async scan() {
    try {
      const result = await this.scanBarcode();
      
      if (result) {
        this.dataLocalService.guardarRegistro(result);
      }

    } catch (error) {
      this.dataLocalService.guardarRegistro('QRCode no reconocido');
    }
  }

  async logout() {
    try {
      await this.globalStateService.logout();
    } catch (error) {
      console.error(error);
    }
  }

}
