import { Component, signal, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type{ Character } from '../../interfaces/character.interface';
import { Car } from '../../interfaces/car.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';
import { AutoEngineComponent } from "../../components/car/autoencendido.component";

@Component({
  selector:'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent, AutoEngineComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonBallService);





}
