import { Component, signal } from "@angular/core";

@Component({
  templateUrl: 'not-found.component.html',
  styleUrl: 'not-found.component.css',
})
export class NotFoundComponent {
  msg = signal('Not Found: Error 404');

  msgError(){
    return this.msg().toUpperCase();
  }
}

