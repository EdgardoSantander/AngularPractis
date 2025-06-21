import { Car } from './../interfaces/car.interface';
import { effect, Injectable ,signal} from '@angular/core';
import { Character} from '../interfaces/character.interface';


const loadToLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters) : [];
  }
//Dependencies injectable
@Injectable({providedIn: 'root'})
export class DragonBallService {

  nombreLista = signal("Listado Personajes");

  personajes = signal<Character[]>(loadToLocalStorage());

  carritos = signal<Car[]>([
    {model: 3,year: '1995',type:'Chevy Monza'}
  ]);

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.personajes()));
  })



  agregarPersonaje(personaje: Character){

    this.personajes.update((listado) => [...listado,personaje]);

  }
}
