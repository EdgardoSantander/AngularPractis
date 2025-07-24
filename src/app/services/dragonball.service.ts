import { Car } from './../interfaces/car.interface';
import { effect, Injectable ,signal} from '@angular/core';
import { Character} from '../interfaces/character.interface';


const loadToLocalStorage = (): Character[] => {
    //const characters = localStorage.getItem('characters');
    const chararcterssss = sessionStorage.getItem('characters');

    return chararcterssss ? JSON.parse(chararcterssss) : [];
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
    //localStorage.setItem('characters', JSON.stringify(this.personajes()));
    sessionStorage.setItem('characters', JSON.stringify(this.personajes()));
    console.log(`se agrego personaje a la lista ${this.personajes().length}`);
  })



  agregarPersonaje(personaje: Character){

    this.personajes.update((listado) => [...listado,personaje]);

  }
}
