import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass'],
})
export class AddCourseComponent implements OnInit {
  course: Course = {};
  categories: Category[] = [
    {
      name: 'Angular',
      checked: false,
    },
    {
      name: 'Web',
      checked: false,
    },
    {
      name: 'Mobile',
      checked: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  save() {
    this.course.categories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.name);

    console.log(this.course);
  }
}
