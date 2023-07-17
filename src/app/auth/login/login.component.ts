import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!:FormGroup;
  students:any[]= []
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {

    
  }

}
