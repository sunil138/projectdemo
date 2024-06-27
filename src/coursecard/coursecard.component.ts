import { Component, ConstructorSansProvider, Input, input} from '@angular/core';
import { title } from 'process';
import { Course } from '../models/Course'; 

@Component({
  selector: 'app-coursecard',
  standalone: true,
  imports: [],
  templateUrl: './coursecard.component.html',
  styleUrl: './coursecard.component.css'
})
export class CoursecardComponent 
{
  // @Input()
  //  title:string="";

   @Input() 
  course1!: Course;  

  @Input() 
  indexOne:number=0; 
  
  onClick()
  {
    alert("Course displayed: " + this.course1.description);  
    console.log("Course displayed: " + this.course1.category); 
    console.log(this.course1); 
      
  }

    
}
