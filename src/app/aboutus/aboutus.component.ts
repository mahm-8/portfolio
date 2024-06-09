import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'aboutus',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  // skills = {
  //   'programmingLanguage': [
  //     'Java',
  //     'C#',
  //     'JavaScript',
  //     'Dart', 'SQL'
  //   ], 'framework': ['Flutter', '.NET core', 'Angular', 'Object Oriented Programming'],
  //   'backEnd': ['API integrtion', 'RESTful API with Dart', 'DataBase Management'],
  //   'version': ['Git', 'GitHub'],
  //   'frontEnd': ['UI/UX design',
  //     'Responsive design'
  //   ]
  // };
  tools = ['./java.svg', './c-icon.svg',
    './dart.svg', './javascript.svg',
    './html.svg', './flutter.svg', './angular-icon.svg', './css.svg',
    './supabase-logo.svg', './firebas-logo.svg',
    './git.svg', './github.svg'];
}
