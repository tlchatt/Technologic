/*
Secondary component clients.component
also divided between three files
This is the client compnonent class file
Primary component is app.component
*/

import { Component, OnInit } from '@angular/core';
/*^You always import the Component symbol from the Angular core library and annotate the component class with @Component.
@Component is a decorator function that specifies the Angular metadata for the component.
*/
import { Client } from './client';  
import { CLIENTS } from './mock-clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
/*
selector— the components CSS element selector 
The CSS element selector, 'app-clients', matches the name of the HTML element ' <app-clients></app-clients>' that identifies this component within a parent component's template.
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles.
*/
export class ClientsComponent implements OnInit {

  clients = CLIENTS; //clients property is array of items imported imported above from mock-clients.ts of clients class
  selectedClient: Client; //selected client property to be of type Client as imported above from the clients.ts
  onSelect(client: Client): void {
    this.selectedClient = client;
  }


  constructor() { }

  ngOnInit() {
  }
/*  
The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
A component has a lifecycle managed by Angular.
Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.
Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.
See other hooks here https://angular.io/guide/lifecycle-hooks
*/
}
/*
always export the component class so you can import it elsewhere ... like in the AppModule.
*/
