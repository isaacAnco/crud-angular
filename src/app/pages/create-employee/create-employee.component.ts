import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { confirmValid } from '../module/confirm'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  groupEmployees:FormGroup;
  
  constructor(private fb: FormBuilder, private toastr: ToastrService) { 

    this.groupEmployees = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      users: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z0-9-.]+$/)]],
      validator: confirmValid('password', 'confirmPassword')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.groupEmployees.valid){
      this.toastr.success('the employee was successfully saved', 'saved employee');
    } else {
      this.toastr.error('the form is invalid');
    }
  }
}
