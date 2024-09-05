import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CitasService } from 'src/app/Servicios/citas.service';
import { IonHeader, IonList, IonItem, IonInput, IonButton, IonLabel } from "@ionic/angular/standalone";
import { Cita } from 'src/app/Modelo/Citas';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-citas',
  templateUrl: './agregar-citas.component.html',
  styleUrls: ['./agregar-citas.component.scss'],
  standalone: true,
  imports : [IonLabel,FormsModule,IonHeader, IonList,IonItem, IonInput,IonButton]
})
export class AgregarCitasComponent  implements OnInit {

  frase: string=""
  autor: string=""

  @Output() nuevaCita= new EventEmitter<Cita>()

  constructor(private citasService: CitasService) { }

  ngOnInit() {}

  agregarCita(){
      if (this.frase && this.autor){
        const cita: Cita= {frase: this.frase, autor: this.autor}
        this.nuevaCita.emit(cita)
        this.frase = ""
        this.autor = ""
      }
    }
}

