import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor .NET',
        p: 'GFT Brasil | Ago 2024 - Present'
      },
      text: '<p>Alocado no Banco BTG Pactual atuando no desenvolvimento de soluções completas, incluindo backend em .NET, frontend com Angular, bancos de dados MySQL e DynamoDB, além de ferramentas AWS como Cognito e S3.</p>'
    },
    {
      summary: {
        strong: 'Desenvolvedor',
        p: 'Cobmais | Mai 2023 - Jul 2024'
      },
      text: '<p>Responsável pelo desenvolvimento de novas funcionalidades, melhorias contínuas e correções no sistema interno utilizando .NET, C#, JavaScript e SQL Server, Mensageria Azure ServiceBus, Azure DevOps. Garantindo a implementação eficiente e alinhada às necessidades do negócio com outros projetos e serviços.</p>'
    },
    {
      summary: {
        strong: 'Desenvolvedor Web',
        p: 'L8 Digital | Jan 2023 - Abr 2023'
      },
      text: '<p>Desenvolvimento de sistemas web com foco no Front-End utilizando Vue.js e Tailwind para criar interfaces de usuários interativas e responsivas. Também realizei manutenções no Back-End com Laravel.</p>'
    },
    {
      summary: {
        strong: 'Desenvolvedor Full-Stack',
        p: 'DBR Sistemas | Ago 2022 - Jan 2023'
      },
      text: '<p>Atuei como Desenvolvedor Full Stack em um sistema de açougue, utilizando PHP, JavaScript, Bootstrap e MySQL. Fui responsável pelo desenvolvimento e manutenção de funcionalidades no front-end e back-end, além de implementar melhorias e correções.</p>'
    },
  ]);
}
