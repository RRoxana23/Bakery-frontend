import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FollowUsComponent } from "../follow-us/follow-us.component";

@Component({
    selector: 'app-delivers-page',
    standalone: true,
    templateUrl: './delivers-page.component.html',
    styleUrl: './delivers-page.component.css',
    imports: [MenuBarComponent, FollowUsComponent]
})

export class DeliversPageComponent {

  }