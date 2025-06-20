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
  id = 1;



  guardarPersonaje(){

      let nuevoDato:Character = {
            id: this.id+1,
            nombre: this.nombreTemplate(),
            poder: this.poderTemplate()
          }

      this.newPersonaje.emit(nuevoDato);


      console.log(this.nombreTemplate());
      console.log(this.poderTemplate());

      this.resetFields();
  }


  resetFields(){
    this.nombreTemplate.set('');
    this.poderTemplate.set(0);
  }
}
