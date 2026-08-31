import { Component } from '@angular/core';
import { SectionHeading } from '../section-heading/section-heading';
import { ServiceCard } from './service-card';

type Service = {
  title: string;
  description: string;
  iconPaths: readonly string[];
};

@Component({
  imports: [ServiceCard, SectionHeading],
  selector: 'app-services',
  template: `
    <div class="flex flex-col items-center gap-12 py-section">
      <app-section-heading headingId="services-title" title="Serviços" subtitle="O que eu faço" />

      <div
        role="list"
        class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(n+4)]:col-span-3"
      >
        @for (service of services; track service.title) {
          <app-service-card
            [title]="service.title"
            [description]="service.description"
            [iconPaths]="service.iconPaths"
          />
        }
      </div>
    </div>
  `,
})
export class Services {
  protected readonly services: Service[] = [
    {
      title: 'Desenvolvimento Backend',
      description:
        'APIs REST robustas e sistemas backend em PHP 8 e Laravel, do modelo de dados à regra de negócio, com foco em manutenibilidade e performance.',
      iconPaths: [
        'm10.852 14.772-.383.923',
        'M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923',
        'm13.148 9.228.383-.923',
        'm13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544',
        'm14.772 10.852.923-.383',
        'm14.772 13.148.923.383',
        'M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5',
        'M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5',
        'M6 18h.01',
        'M6 6h.01',
        'm9.228 10.852-.923-.383',
        'm9.228 13.148-.923.383',
      ],
    },
    {
      title: 'Desenvolvimento Frontend',
      description:
        'Interfaces em Angular e TypeScript, construídas com atenção a acessibilidade, testes automatizados e consistência visual, da tela ao dado que ela consome.',
      iconPaths: ['m18 16 4-4-4-4', 'm6 8-4 4 4 4', 'm14.5 4-5 16'],
    },
    {
      title: 'Arquitetura de Software',
      description:
        'Condução de decisões arquiteturais em sistemas de grande porte: migração de monolitos para DDD e Clean Architecture, documentação de decisões técnicas em ADRs e definição de padrões para o time.',
      iconPaths: [
        'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z',
        'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12',
        'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
      ],
    },
    {
      title: 'Integrações com ERPs',
      description:
        'Integração de sistemas com ERPs de mercado (TOTVS Protheus, Senior Mega) e serviços financeiros como a TecnoSpeed, conectando processos de negócio críticos de ponta a ponta.',
      iconPaths: [
        'm19 5 3-3',
        'm2 22 3-3',
        'M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z',
        'M7.5 13.5 10 11',
        'M10.5 16.5 13 14',
        'm12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z',
      ],
    },
    {
      title: 'DevOps & Qualidade',
      description:
        'Ambientes containerizados com Docker, pipelines de entrega contínua no GitLab CI/CD e implantação de cobertura de testes automatizados do zero, elevando a qualidade e a velocidade de entrega do time.',
      iconPaths: [
        'M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z',
        'M10 21.9V14L2.1 9.1',
        'm10 14 11.9-6.9',
        'M14 19.8v-8.1',
        'M18 17.5V9.4',
      ],
    },
  ];
}
