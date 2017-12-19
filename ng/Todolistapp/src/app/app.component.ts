/*You'll find the implementation of the shell AppComponent distributed over three files:

app.component.ts— the component class code, written in TypeScript.
app.component.html— the component template, written in HTML.
app.component.css— the component's private CSS styles.

*/
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Technologic Clients and To-Dos';
}
