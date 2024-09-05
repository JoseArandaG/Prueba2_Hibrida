import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { CitaRandomComponent } from 'src/app/Componentes/cita-random/cita-random.component';
import {settingsOutline} from 'ionicons/icons'
import { add } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, RouterModule,CitaRandomComponent,IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({
      settingsOutline,
      add
    })
  }
}
