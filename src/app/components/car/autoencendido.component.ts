import { Component, input, signal } from "@angular/core";
import type{Car} from "../../interfaces/car.interface";

@Component({
  selector:'auto-engine-component',
  imports:[],
  templateUrl:'./autoencendido.component.html'
})
export class AutoEngineComponent{
  

  carritos= input.required<Car[]>();


}
