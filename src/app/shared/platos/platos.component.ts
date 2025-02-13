import { Component } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import {HttpClientModule } from '@angular/common/http';
import { Plato } from '../../interfaz/plato';

@Component({
  selector: 'app-platos',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  platos:Plato[]=[];
constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta =>{
      this.platos = respuesta as Array<Plato>
    })
  }
}
