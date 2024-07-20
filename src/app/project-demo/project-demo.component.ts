import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-project-demo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-demo.component.html',
  styleUrl: './project-demo.component.css'
})
export class ProjectDemoComponent {
  projects = [{ 'name': 'zaoed', 'selected': false, 'demo': 'https://github.com/mahm-8/Zaoed-Project/assets/141933812/b2584637-87ba-46d7-9593-5e34830e5756' },
  { 'name': 'asthma', 'selected': false, 'demo': 'https://github.com/user-attachments/assets/0ce0bf42-b1e0-458f-b60a-d391aa74a43d' },
  { 'name': 'fitood', 'selected': true, 'demo': 'https://github.com/mahm-8/Zaoed-Project/assets/141933812/b2584637-87ba-46d7-9593-5e34830e5756' },
  { 'name': 'zaoed', 'selected': true, 'demo': 'https://github.com/mahm-8/Zaoed-Project/assets/141933812/b2584637-87ba-46d7-9593-5e34830e5756' }];

  // selected = () => {
  //   // for (let index = 0; index < this.projects.length; index++) {
  //   //   if (this.projects[index].name === this.projects[1].name) {
  //   //     this.projects[index].selected = false;
  //   //   } else {
  //   //     this.projects[index].selected = true;
  //   //   }
  //   //   console.log(this.projects[index].name);


  //   // }
  //   alert("print");
  // }
}
