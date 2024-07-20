import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  tools = ['./tool/java.svg', './tool/c sharp.svg',
    './tool/dart.svg', './tool/javascript.svg',
    './tool/html.svg', './tool/flutter.svg', 
    './tool/angular.svg', './tool/css.svg',
    './tool/supabase.svg', './tool/firebase.svg',
    './tool/git.svg', './tool/github.svg'];
}
