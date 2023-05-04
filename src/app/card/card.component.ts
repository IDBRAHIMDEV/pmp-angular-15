import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() id: number = 0 
@Input() title: string = ""
@Input() body: string = "" 

@Output() deleteCourseById = new EventEmitter()
@Output() updateCourse = new EventEmitter()

deleteCourse(id: number) {
   this.deleteCourseById.emit({id: id, message: 'I want to delete this course using the ID daddy'})
}

editCourse() {
  let myCourse = {
    course: {
      id: this.id,
      title: this.title,
      body: this.body
    },
    message: 'delete course'
  }
  this.updateCourse.emit(myCourse)
}

}
