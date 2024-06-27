import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { CoursecardComponent } from '../coursecard/coursecard.component';
import { COURSES } from '../ParentComponent';
import { Course } from '../models/Course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursecardComponent,CommonModule],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Angular Project'; 
  data ={title:'AngularFirstProject'};  

  coursesAll=COURSES;    
  //coursesAll=[]; 

  coreCourse=COURSES[0];
  courseOne=COURSES[1];
  courseTwo=COURSES[2];
  courseThree=COURSES[4]; 

  // trackCourse(index:number, course:Course)
  // {
  //   return course.id;  
  // }

  OnAppComponent()
  {
    alert("displayed: " + this.coreCourse.description);  
    //console.log("Inside AppComponent"); 
  }
//  OnClicked()
//  {
//   console.log("Hello world"); 
//   console.log("clicked");  
//   alert("Hello");  
//  }


//  OnKeyUp(newTitle:string)
//  {
//   this.data.title=newTitle; 
//  }

}
