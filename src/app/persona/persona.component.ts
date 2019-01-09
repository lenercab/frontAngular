import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../servicio/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
/*User: any = {Id: number, username: '', password: '', status: number };
Account: any ={Id: number, number:''};
agregarPersona: any = { Id: number, Nombres: '', Apellidos: '', Identificacion: '', user: User, account:Account };
*/
  personas: any = [];
  constructor(private personaService: PersonaService) {


   }


  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.personaService.obtenerTodasLasPersonas().subscribe((data: {}) => {
      console.log(data);
      this.personas = data;
    });
  }

  eliminarPersona(identification:any){
    this.personaService.eliminarPersona(identification).subscribe(resultado => {
      this.obtenerPersonas();
    },
  error => {
    console.log(JSON.stringify(error));
  });
  /*.subscribe(res => {this.obtenerPersonas();}
    , (error) => {console.log(error);
    });*/
    console.log("evento eliminar: "+identification);
  }

}
