import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { PageContentComponent } from "../page-content/page-content.component";
import { PageContent } from '../../interfaces/page-content';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'app-join-page',
    standalone: true,
    templateUrl: './join-page.component.html',
    styleUrl: './join-page.component.css',
    providers: [provideNativeDateAdapter()],
    imports: [MenuBarComponent, PageContentComponent, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatIconModule, CommonModule]
})
export class JoinPageComponent implements OnInit {

  SmallScreen: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.SmallScreen = window.innerWidth < 800;
  }

  joinOurTeam: PageContent = {
    leftPhoto: './assets/join-page-img.jpg',
    title: 'It starts with our mission! Ready to join our Sweet Team?'
  };

  cityControl = new FormControl<any | null>(null, Validators.required);
  firstNameFormControl = new FormControl('', Validators.required);
  lastNameFormControl = new FormControl('', Validators.required);
  phoneNumberFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  fileName: any;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  cities: any[] = [
    {name: 'Craiova'},
    {name: 'Constanta'},
    {name: 'Bucuresti'},
    {name: 'Cluj'},
  ];

  matcher = new MyErrorStateMatcher();
}
