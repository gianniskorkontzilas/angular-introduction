import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person ={
    givenName: 'Giannis',
    surName: 'Korkontzilas',
    age: 0,
    email: 'g@aueb.gr',
  };
}
