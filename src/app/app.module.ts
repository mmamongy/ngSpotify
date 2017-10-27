import { NgModule    }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about',component: AboutComponent , data:'About' },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [BrowserModule ,    
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

