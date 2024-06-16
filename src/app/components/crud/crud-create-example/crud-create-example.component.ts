import { Component } from '@angular/core';
import { CrudNavbarComponent } from "../crud-navbar/crud-navbar.component";

@Component({
    selector: 'app-crud-create-example',
    standalone: true,
    templateUrl: './crud-create-example.component.html',
    styleUrl: './crud-create-example.component.css',
    imports: [CrudNavbarComponent]
})
export class CrudCreateExampleComponent {

}
