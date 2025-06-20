import { Component, signal } from '@angular/core';

interface Personaje{
  id: number;
  nombre:string;
  poder:number;
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  nombreTemplate = signal('');
  poderTemplate = signal(0);

  personajes = signal<Personaje[]>([
    {id: 1, nombre: 'Goku', poder:9001},
    {id: 2, nombre: 'Vegeta', poder:8001},
    {id: 3, nombre: 'Picoro', poder:2001},
    {id: 4, nombre: 'Yamcha', poder:100},
    {id: 5, nombre: 'Gohan', poder: 3700},
    {id: 6, nombre: 'Trunks', poder:3400},
    {id: 7, nombre: 'Krilin', poder: 499}
  ]);


  guardarPersonaje(){

    let nuevoDato:Personaje = {
      id: this.personajes().length+1,
      nombre: this.nombreTemplate(),
      poder: this.poderTemplate()
    }
    //! Esta es la opcion normal pero no recomendada para signals
    //? this.personajes().push(nuevoDato);
    //! Esta es la que se recomienda
    /* esta es la correcta!! */ this.personajes.update(lista => [...lista,nuevoDato]);
    //! Ojo los datos no persisten pues no contamos con ese servicio
    //!limpiar Campos
    this.resetFields();

    console.log(this.personajes())
    console.log(this.nombreTemplate());
    console.log(this.poderTemplate());
  }

  resetFields(){
    this.nombreTemplate.set('');
    this.poderTemplate.set(0);
  }

}
