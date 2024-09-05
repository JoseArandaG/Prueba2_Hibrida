import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/Servicios/citas.service';

@Component({
  selector: 'app-obtener-citas',
  templateUrl: './obtener-citas.component.html',
  styleUrls: ['./obtener-citas.component.scss'],
  standalone: true,
})
export class ObtenerCitasComponent  implements OnInit {
  
  citas = this.citasService.obtenerCitas()

  constructor(private citasService: CitasService) { }

  eliminarCita(cita:any){
    this.citasService.eliminarCita(cita)
  }

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas()
  }

}
