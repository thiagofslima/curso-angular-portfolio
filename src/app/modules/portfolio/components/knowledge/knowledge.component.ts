import { Component, signal } from '@angular/core';
import { IKnowledge } from '../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento de csharp'
    },
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone de conhecimento de dotnet'
    },
    {
      src: 'assets/icons/knowledge/azure.svg',
      alt: 'Ícone de conhecimento de azure'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de sass'
    }
  ])
}
