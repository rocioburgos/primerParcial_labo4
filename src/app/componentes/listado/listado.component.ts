import { Component, OnInit } from '@angular/core';
import { BasicoService } from 'src/app/servicios/basico/basico.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado:Array<any>=[];
  constructor(private baseSrv:BasicoService) { }

  ngOnInit(): void {

    this.baseSrv.obtenerDocumentos().subscribe((data)=>
    {this.listado= data})
  }

}
