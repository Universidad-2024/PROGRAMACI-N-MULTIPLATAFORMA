import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private _isLoggedIn = false;
  private _user: Observable<any> = authState(this.auth);

  constructor(private auth: Auth, private router: Router, private alertController: AlertController) {
    this._user = authState(this.auth);
    this._user.subscribe(async user => {
      this._isLoggedIn = !!user;
      if (user) {
        await Preferences.set({ key: 'isLoggedIn', value: 'true' });
      } else {
        await Preferences.remove({ key: 'isLoggedIn' });
      }
    });

    this.restoreSession();
  
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get user(): Observable<any> {
    return this._user;
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/tabs/tab1']);
    } catch (error: any) {
      console.error('Login error:', error);
      this.showAlert('Login Error', error?.message! || 'Error al cerrar sesión');
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this._isLoggedIn = false;
      await Preferences.remove({ key: 'isLoggedIn' });
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Logout error:', error);
      this.showAlert('Logout Error', error?.message! || 'Error al cerrar sesión');
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/tabs/tab1']); 
    } catch (error: any) {
      console.error('Registration error:', error);
      this.showAlert('Registration Error', error?.message! || 'Error al cerrar sesión');
    }
  }

  private async restoreSession(): Promise<void> {
    const { value } = await Preferences.get({ key: 'isLoggedIn' });
    if (value === 'true') {
      this._isLoggedIn = true;
      this.router.navigate(['/tabs/tab1']); 
    }
  }

  private async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
