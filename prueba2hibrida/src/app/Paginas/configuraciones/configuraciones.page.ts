import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonToggle, IonLabel, IonItem, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfiguracionesPage implements OnInit {

  habilitado: boolean=false

  constructor() { }

  async toggleEliminar(){
    await Preferences.set({
      key: "habilitado",
      value: JSON.stringify(this.habilitado)
    })
  }

  async ngOnInit() {
    const {value} = await Preferences.get({ key:"habilitado"})
    if (value !== null){
      this.habilitado= JSON.parse(value)
    }
  }

  



}
