import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-follow-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-us.component.html',
  styleUrl: './follow-us.component.css'
})
export class FollowUsComponent {

  @Input()
  goDown: boolean = false;

  goDownInAbout(){
    console.log(this.goDown);
    if(this.goDown)
      return 'below';
    return undefined;
  }
}
