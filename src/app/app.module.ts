import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NewExamComponent } from './doctor/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/students/students.component';
import { SubjectsComponent } from './doctor/subjects/subjects.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ExamComponent } from './student/exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewExamComponent,
    StudentsComponent,
    SubjectsComponent,
    NavbarComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    RegisterComponent,
    NewExamComponent,
    StudentsComponent,
    SubjectsComponent,
    NavbarComponent,
    ExamComponent
  ]
})
export class AppModule { }
