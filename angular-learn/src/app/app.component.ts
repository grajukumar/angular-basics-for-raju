import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  //templateUrl:'./app.component.html',
  template:`<h1>{{tittle}} </h1>`,
  styles:[]
})

export class AppComponent{
  tittle:string ="Hello angular";
}