import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder,AbstractControl,  FormControl, FormGroup } from '@angular/forms';
import { BasicoService } from 'src/app/servicios/basico/basico.service';
  


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder,    
              private baseSrv:BasicoService,
              private router:Router) {
    this.formulario= fb.group({
      //todos los campos de mi formulario
            //valor por defecto del campo
      email: ['', [Validators.required, this.validarEmailTipo] ],
      clave: ['', [Validators.required , Validators.minLength(8) ]],
      terminos: ['',Validators.required],
      edad: ['',[Validators.required, Validators.min(18)]],
      nombre: ['', [Validators.required , this.validarNombre]]
    });
   }
  

   

  ngOnInit(): void {
  }

 
  aceptar(){
    const datos = this.formulario.value; 


    this.baseSrv.crearDocumento(datos).then(()=>
    this.router.navigate(['listado']));
  }


  validarNombre(control:AbstractControl){
    const nombre = control.value;
    const tieneEspacio= nombre.includes(' ');
    if(tieneEspacio){
      return {tieneEspacio: true}
    }else{
      return null;
    }
  }
 


  validarEmailTipo(control:AbstractControl){
    const email = control.value;
    const esHotMail= email.includes('@hotmail.com');
    if(esHotMail){
      return {esHotMail: true}
    }else{
      return null;
    }
  }
}
