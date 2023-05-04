import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {

  edit = false

  myImage: string = "https://www.pmp.ma/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-17.14.57-620x330.jpeg"

  myCourse: any = {
    id: 0,
    title: '',
    price: 0
  }

  courses: any[] = [
    {id: 1, title: "Spring", price: 12},
    {id: 2, title: "Laravel", price: 42},
    {id: 3, title: "Asp dotnet", price: 65},
    {id: 4, title: "Symfony", price: 145}
  ];

  addCourse() {
    //this.courses.unshift(this.myCourse)
    this.courses = [this.myCourse, ...this.courses]

    this.myCourse = {
      id: 0,
      title: '',
      price: 0
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
      price: 0
    }
  }
}
