import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BasicoService } from 'src/app/servicios/basico/basico.service';
 
 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email = '';

  clave =  '';

  copiaClave = ''; 


  constructor(private builder: FormBuilder, 
    private baseSrv:BasicoService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }


  registrar() {
    let data= {'email':this.email, 'clave':this.clave}
    this.baseSrv.crearDocumento(data).then(()=>
    this.router.navigate(['listado']));
  }

  

}
