import { Component } from '@angular/core';
import { Plato } from '../../interfaz/plato';
import { HttpClientModule } from '@angular/common/http';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  platos:any[]=[
    {
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYQIOsl5L6namfbnmAuHDY-Y5FyuBIqPIKA&s'
    },
    {
      foto:'https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg'
    },
    {
      foto:'https://i.natgeofe.com/n/aed9f829-849c-4902-88bb-27e570c2a398/GettyImages-180258510_3x2.jpg'
    }
  ]
  // constructor(private recursosService: RecursosService) {
  //   recursosService.obtenerDatos().subscribe(respuesta =>{
  //     this.platos = respuesta as Array<Plato>
  //   })
  // }
}
