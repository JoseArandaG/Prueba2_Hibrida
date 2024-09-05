import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton, IonIcon, IonFab, IonFabButton, IonFabList } from '@ionic/angular/standalone';
import { AgregarCitasComponent } from 'src/app/Componentes/agregar-citas/agregar-citas.component';
import { CitasService } from 'src/app/Servicios/citas.service';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { Cita } from 'src/app/Modelo/Citas';

@Component({
  selector: 'app-gestion-de-citas',
  templateUrl: './gestion-de-citas.page.html',
  styleUrls: ['./gestion-de-citas.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFabButton, IonFab, IonIcon, IonButton, IonLabel, IonItem, IonList, AgregarCitasComponent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionDeCitasPage implements OnInit {

  citas: Cita[] = [];
  habilitado: boolean = true; // Asegúrate de que esto esté en true si deseas permitir eliminación

  constructor(private citasService: CitasService) { }

  async ngOnInit() {
    try {
      await this.citasService.iniciarPlugin(); // Inicializa SQLite y crea tablas
      this.citas = await this.citasService.obtenerCitas(); // Obtén las citas

      addIcons({
        trashOutline
      });
    } catch (error) {
      console.error('Error al inicializar el servicio de citas:', error);
    }
  }

  async agregarCita(cita: Cita) {
    if (!cita.frase.trim() || !cita.autor.trim()) {
      console.error('La frase y el autor son campos obligatorios.');
      return;
    }

    try {
      await this.citasService.agregarCita(cita);
      this.citas = await this.citasService.obtenerCitas(); // Actualiza la lista de citas
    } catch (error) {
      console.error('Error al agregar la cita:', error);
    }
  }

  async eliminarCita(id: number) {
    if (!this.habilitado) {
      console.error('La opción de eliminación no está habilitada.');
      return;
    }

    try {
      await this.citasService.eliminarCita(id); // Cambia esto a sólo pasar el id
      this.citas = await this.citasService.obtenerCitas(); // Actualiza la lista de citas
    } catch (error) {
      console.error('Error al eliminar la cita:', error);
    }
  }
}
