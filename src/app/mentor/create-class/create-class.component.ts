import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { ApiService } from '../../../ApiService';
import {ErrorStateMatcher} from '@angular/material/core';

interface Food {
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  foods: Food[] = [
    {value: 'opt0', viewValue: 'English'},
    {value: 'opt1', viewValue: 'Telugu'},
    {value: 'opt2', viewValue: 'Hindi'},
    {value: 'opt3', viewValue: 'Mathematics'},
    {value: 'opt4', viewValue: 'Mathematics (Algebra)'},
    {value: 'opt5', viewValue: 'Mathematics (Geometry)'},
    {value: 'opt6', viewValue: 'Mathematics (Trigniometry)'},
    {value: 'opt7', viewValue: 'Science'},
    {value: 'opt8', viewValue: 'Science (Physics)'},
    {value: 'opt9', viewValue: 'Science (Chemistry)'},
    {value: 'opt10', viewValue: 'Science (Biology)'},
    {value: 'opt11', viewValue: 'Social Studies'},
    {value: 'opt12', viewValue: 'Social Studies (History)'},
    {value: 'opt13', viewValue: 'Social Studies (Geography)'},
    {value: 'opt14', viewValue: 'Social Studies (Economics)'},
  ];
  showError = false;
  message = "";
  classDetailForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    emailFormControl:  ['', Validators.required],
    slot: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,  private toast: ToastrService, private router: Router, private apiService: ApiService) { 
    this.showError =  false;
  }

  ngOnInit(): void {
    
  }
  

  createClass() {
    console.log(this.classDetailForm.value);
    if (this.classDetailForm.status == "INVALID") {
      this.showError =  true;
    }
    else
      this.showError =  false;
      
      var data = this.classDetailForm.value;
      console.log(data);
      
      this.apiService.postData(data).subscribe((response: any) => {
        console.log(response);
      });

      this.toast.success("Class created!")
      this.classDetailForm.reset();
      this.router.navigate(['/expertise'])
  }
}
