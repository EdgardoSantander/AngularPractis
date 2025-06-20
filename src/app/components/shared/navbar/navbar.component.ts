import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


//! Se utiliza selector cuando se quiere crear un componente que se quiera colocar como una etiqueta dentro de
//! otro componente, esto es basicamente como trabajan los html principales
// ? Esto es app.component.html a su vez este esta alojado en index.html, de cualquier forma es importante
// ? comprender la estructura y la forma en como trabaja angular
@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
