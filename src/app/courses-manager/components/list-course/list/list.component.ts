import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/courses-manager/models/course';
import { CourseService } from 'src/app/courses-manager/services/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().then((courses) => (this.courses = courses));
  }
}
