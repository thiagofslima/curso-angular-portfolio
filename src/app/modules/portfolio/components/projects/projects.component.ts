import { Component, signal } from '@angular/core';
import { IProjects } from '../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Descrição do projeto</p>',
      liks: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/thiagofslima'
        }
      ]
    }
  ]);
}
