import { Routes } from '@angular/router';
import { CounterComponentPage } from './pages/counter/counter.component';
import { HeroComponentPage } from './pages/hero/hero-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponentPage,
  },
  {
    path: 'hero',
    component: HeroComponentPage,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonballsuper',  
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
