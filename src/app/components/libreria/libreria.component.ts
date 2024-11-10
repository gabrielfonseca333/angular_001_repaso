import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic'; //1) IMPORTAMOS EL MODELO
import { ServiceComics } from '../../services/service.comics'; //2) IMPORTAMOS EL SERVICIO

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
})
export class LibreriaComponent implements OnInit{

  //Así es como se recuperan las variables de forms
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion! : ElementRef;
  @ViewChild("cajaimagen") cajaImagen! : ElementRef;

  //metodo para crearlo
  crearComic():void{
    let nombre = this.cajaNombre.nativeElement.value
    let descripcion = this.cajaDescripcion.nativeElement.value
    let imagen = this.cajaImagen.nativeElement.value
    let comicNew = new Comic(nombre, imagen, descripcion)
    this.comics.push(comicNew)
  }


  public comics! : Array<Comic> //4) DECLARAMOS EL OBJETO A UTILIZAR PARA DIBUJAR
  public comicFavorito! : Comic

  constructor(
    private _service: ServiceComics //5) RECUPERAMOS EL SERVICIO
  ){}

  ngOnInit(): void {
      this.comics = this._service.getComics(); //6) PASAMOS LOS DATOS DEL SERVICIO A NUESTRO OBJETO
  }

  marcarFavorito(event: Comic):void{
    this.comicFavorito = event
  }


}
