import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Giannis';

  person ={
    givenName: 'Giannis',
    surName: 'Korkontzilas',
    age: 0,
    email: 'g@aueb.gr',
  };
}
