import { Component, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  { 
  constructor( public viewContainerRef : ViewContainerRef){}
  name = 'Angular'; }
