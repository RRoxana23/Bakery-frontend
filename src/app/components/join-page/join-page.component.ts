import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { PageContentComponent } from "../page-content/page-content.component";
import { PageContent } from '../../interfaces/page-content';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
export class JoinPageComponent implements OnInit{

  formGroup: FormGroup;
  SmallScreen: boolean = false;
  fileName: any;

  constructor(private builder: FormBuilder) {
    
    this.formGroup = this.builder.group({
      cityControl: ['', Validators.required],
      firstNameFormControl: ['', Validators.required],
      lastNameFormControl: ['', Validators.required],
      dateFormControl: ['', Validators.required],
      phoneNumberFormControl: ['', [
        Validators.required,
        Validators.pattern(/^[\d-]{9,11}$/)
      ]],
      emailFormControl: ['', [Validators.required, Validators.email]]
    });
  }

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

  cities: any[] = [
    {name: 'Craiova'},
    {name: 'Constanta'},
    {name: 'Bucuresti'},
    {name: 'Cluj'},
  ];

  matcher = new MyErrorStateMatcher();
}
