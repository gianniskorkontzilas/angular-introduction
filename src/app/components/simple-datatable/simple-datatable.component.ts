import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
@Input() data: EPerson[];
 
sortOreder = {
  givenName: 'none',
  surName: 'none',
  age: 'none',
  email: 'none',
  education: 'none',
}

sortData(sortKey: string) {
  if (this.sortOreder[sortKey] === 'asc') {
    this.sortOreder[sortKey] = 'desc';
    this.data = sortBy(this.data, sortKey).reverse();
  } else {
    this.sortOreder[sortKey] = 'asc';
    this.data = sortBy(this.data, sortKey);
  }

  for (let key in this.sortOreder) {
    if (key !== sortKey) {
      this.sortOreder[key] = 'none';
    }
  }
}

sortSign(sortKey: string) {
  if (this.sortOrder[sortKey] === 'asc') {
    return '↑';
  } else if (this.sortOrder[sortKey] === 'desc') {
    return '↓';
  } else {
    return '';
  }
 }
}
