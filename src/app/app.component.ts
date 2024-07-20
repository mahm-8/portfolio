import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutusComponent } from "./aboutus/aboutus.component";
import {ProjectsComponent } from "./projects/projects.component";
import { ProjectDemoComponent } from './project-demo/project-demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, AboutusComponent ,ProjectsComponent,ProjectDemoComponent]
})
export class AppComponent {
  title = 'my-app';
}
