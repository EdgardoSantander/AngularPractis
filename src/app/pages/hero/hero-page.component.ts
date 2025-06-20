import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe]   // ! importacion de pipes, para su uso en template html
})
export class HeroComponentPage{
  name = signal('Ironman');
  age = signal(45);

  heroDescripcion = computed( () => {
    const description = ` ${this.name()} - ${this.age()}`
    return description;
  })

  heroCapital = computed( () => { this.name().toUpperCase() })

  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);

  }

  changeHeroAge(){
    this.age.set(60);
  }

  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }


}
