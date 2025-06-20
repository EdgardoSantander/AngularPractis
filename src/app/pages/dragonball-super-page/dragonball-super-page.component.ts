import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type{ Character } from '../../interfaces/character.interface';
import { AutoEngineComponent } from '../../components/car/autoencendido.component';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector:'dragonball-super',
  imports: [CharacterListComponent, AutoEngineComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  nombreTemplate = signal('');
  poderTemplate = signal(0);

  personajes = signal<Character[]>([
    {id: 1, nombre: 'Goku', poder:9001},

  ]);

  carros = signal<Car[]>([
    {model: 3,year: '1995',type:'Chevy Monza'}
  ]);


  guardarPersonaje(){

    let nuevoDato:Character = {
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
