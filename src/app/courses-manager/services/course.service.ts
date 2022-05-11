import { Injectable } from '@angular/core';
import { Course } from '../models/course';

// object to store the courses
const data: Course[] = [
  {
    id: 0,
    name: 'Angular',
    description: 'Angular is a platform that makes it easy to build applications with HTML and CSS.',
    specialty: 'Frontend',
    startDate: '01/10/2022',
    categories:['Web','Angular','JavaScript'],
    isActive: true,
    level:5
  },
  {
    id: 1,
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    specialty: 'Frontend',
    startDate: '01/12/2022',
    categories:['Web','React','JavaScript'],
    isActive: true,
    level:6
  },
  {
    id: 2,
    name: 'Vue',
    description: 'Vue.js is a progressive framework for building user interfaces.',
    specialty: 'Frontend',
    startDate: '05/09/2019',
    categories:['Web','Vue','JavaScript'],
    isActive: true,
    level:7
  },
  // backed by a service
  {
    id: 3,
    name: 'Node.js',
    description: 'Node.js is a JavaScript runtime environment for executing JavaScript code server-side.',
    specialty: 'Backend',
    startDate: '01/10/2022',
    categories:['Web','Node.js','JavaScript'],
    isActive: true,
    level:8
  },
  {
    id: 4,
    name: 'MongoDB',
    description: 'MongoDB is a free and open-source cross-platform document database.',
    specialty: 'Backend',
    startDate: '01/10/2022',
    categories:['Web','MongoDB','JavaScript'],
    isActive: true,
    level:9
  },
  {
    id: 5,
    name: 'MySQL',
    description: 'MySQL is a relational database management system (RDBMS) based on the SQL language.',
    specialty: 'Backend',
    startDate: '01/10/2022',
    categories:['Web','MySQL','JavaScript'],
    isActive: true,
    level:10
  },
  {
    id: 6,
    name: 'PostgreSQL',
    description: 'PostgreSQL is a free and open-source relational database management system.',
    specialty: 'Backend',
    startDate: '01/10/2022',
    categories:['Web','PostgreSQL','JavaScript'],
    isActive: true,
    level:10
  }

]

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses():Promise<Course[]>{
    return new Promise((resolve,reject)=>{
      resolve(data);
    })
  }
}
