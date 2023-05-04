import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
      this.courseService.getAllCourses().subscribe((response: any) => {
        this.courses = response
      })
  }

  edit = false

  myImage: string = "https://www.pmp.ma/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-17.14.57-620x330.jpeg"

  myCourse: any = {
    id: 0,
    title: '',
    body: ""
  }

  courses: any[] = [];

  addCourse() {

    this.courses.unshift(this.myCourse)
    this.courses = [this.myCourse, ...this.courses]

    this.myCourse = {
      id: 0,
      title: '',
      body: ''
    }
  }

  deleteCourse(id: number) {
   
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you will destroy this course: " + id,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.courses = this.courses.filter(course => course.id !== id)
        Swal.fire({
          
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 3000
        })
      }
    })
   

    //this.courses = this.courses.filter(course => course.id !== id)
  }


  editCourse(course: any) {
    this.edit = true
    this.myCourse = course
  }

  updateCourse() {
    this.edit = false
    this.myCourse = {
      id: 0,
      title: '',
      body: ''
    }
  }

  destroyCourse(event: any) {
    this.deleteCourse(event.id)
  }

  updateCourseFromChild(event: any) {
    this.editCourse(event.course)
  }
}
