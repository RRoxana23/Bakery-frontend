import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
    selector: 'app-my-account-page',
    standalone: true,
    templateUrl: './my-account-page.component.html',
    styleUrl: './my-account-page.component.css',
    imports: [MenuBarComponent]
})
export class MyAccountPageComponent {

}
