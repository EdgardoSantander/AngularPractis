import {ChangeDetectionStrategy, Component, signal, output } from "@angular/core";
import type { Character } from "../../../interfaces/character.interface";
import { CharacterListComponent } from "../character-list/character-list.component";
@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent{

  nombreTemplate = signal("");
  poderTemplate = signal(0);
  newPersonaje = output<Character>();
  static id:number = 1;





  guardarPersonaje(){

      let nuevoDato:Character = {
            id: ++CharacterAddComponent.id,
            nombre: this.nombreTemplate(),
            poder: this.poderTemplate()
          }

      this.newPersonaje.emit(nuevoDato);




      this.resetFields();
  }


  resetFields(){
    this.nombreTemplate.set('');
    this.poderTemplate.set(0);
  }
}
