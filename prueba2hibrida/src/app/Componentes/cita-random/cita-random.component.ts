import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/Servicios/citas.service';
import { IonCard, IonCardContent, IonText } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Cita } from 'src/app/Modelo/Citas';


@Component({
  selector: 'app-cita-random',
  templateUrl: './cita-random.component.html',
  styleUrls: ['./cita-random.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardContent, IonText, CommonModule]
})
export class CitaRandomComponent  implements OnInit {

  citaRandom: Cita | undefined

  constructor(private citasService: CitasService) { }

  async ngOnInit() {
    this.citaRandom = await this.citasService.obtenerRandomCita()
  }

}
