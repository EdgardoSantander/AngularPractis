import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type{ Character } from '../../interfaces/character.interface';
import { AutoEngineComponent } from '../../components/car/autoencendido.component';
import { Car } from '../../interfaces/car.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector:'dragonball-super',
  imports: [CharacterListComponent, AutoEngineComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  nombreLista = signal("Listado Personajes");

  personajes = signal<Character[]>([
    {id: 1, nombre: 'Goku', poder:9001},
  ]);

  carros = signal<Car[]>([
    {model: 3,year: '1995',type:'Chevy Monza'}
  ]);

  agregarPersonaje(personaje: Character){

    this.personajes.update((listado) => [...listado,personaje]);

  }






}
