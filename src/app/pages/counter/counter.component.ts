
import { Component, signal, ChangeDetectionStrategy} from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CounterComponentPage {
  counter:number = 10;
  counterSignal = signal(10);

  constructor(){
    setInterval(() => {

    this.counterSignal.update(valor => valor + 1);
    },5000)
  }

  increaseByOne(value: number){
    this.counter += value;
    //! this.counterSignal.update(currentvalue => currentvalue + value);
  }

  decreaseByOne(value:number){
    this.counter -= value;
    this.counterSignal.update(currentValue => currentValue - value);
  }

  resetCounter(){
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
