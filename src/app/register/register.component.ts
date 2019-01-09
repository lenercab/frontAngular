import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PersonaService} from '../servicio/persona.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Input persona = {
        firstName: '',
        lastName: '',
        identification: '',
       accounts:[
            {
                number: '0000-0000-0000'
            }
          ]
        ,
        users: [
            {
                password: '',
                status: 1,
                username: ''
            }
        ]
      };

  constructor(private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

 agregarPersona(){
   console.log("evento agregar persona");
   this.personaService.addPersona(this.persona)
   .subscribe(resultado => {
     this.router.navigate(['/persona']);
   },
   error => {
     console.log(JSON.stringify(error));
   });
   /*.subscribe((result) => {
     this.router.navigate(['/product-details/'+result._id]);
   }, (err) => {
     console.log(err);
   });*/
 }

}
