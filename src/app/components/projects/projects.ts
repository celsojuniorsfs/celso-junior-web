import { Component } from '@angular/core';
import { ProjectCard } from './project-card';

type Project = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  imageAlt: string;
};

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  template: `
    <div class="flex flex-col items-center gap-16 py-section">
      <div class="text-center">
        <h2 id="projects-title" class="text-title font-extrabold text-text">Projetos</h2>
        <p class="text-sm font-semibold text-accent">O que já construí</p>
      </div>

      <div class="flex w-full flex-col gap-16">
        @for (project of projects; track project.title) {
          <app-project-card
            [title]="project.title"
            [problem]="project.problem"
            [solution]="project.solution"
            [result]="project.result"
            [image]="project.image"
            [imageAlt]="project.imageAlt"
          />
        }
      </div>
    </div>
  `,
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      title: 'Portal Flash Cover',
      problem:
        'A operação dependia de processos manuais de apoio ao ERP corporativo (Senior Mega e, num momento posterior, TOTVS Protheus), sem um portal web que centralizasse e automatizasse essas rotinas.',
      solution:
        'Desenvolvimento de um portal web e integrações de apoio ao ERP, incluindo participação direta na implantação dos dois sistemas, da customização de processos à automação de relatórios de custo.',
      result:
        'Rotinas antes manuais passaram a rodar de forma automatizada e integrada ao ERP, com a implantação conduzida sem interrupção da operação.',
      image: '/project-flash-cover.svg',
      imageAlt:
        'Ícone de fábrica, representando a fábrica de capotas marítimas por trás do Portal Flash Cover.',
    },
    {
      title: 'ERP MadeLife',
      problem:
        'A empresa controlava seus processos por planilhas de Excel, com fluxos morosos que levavam dias para serem concluídos. Faltava um sistema que desse controle tanto para a equipe interna, de home-care, quanto para a equipe em campo, junto ao paciente.',
      solution:
        'Desenvolvimento de um ERP web em Angular e de um aplicativo mobile em Ionic, permitindo que a equipe em campo registrasse os apontamentos referentes ao paciente diretamente no atendimento.',
      result:
        'Os apontamentos passaram a ser feitos em tempo real pela equipe em campo, com a equipe interna acompanhando os resultados instantaneamente, substituindo um processo que antes levava dias por planilha.',
      image: '/project-madelife.svg',
      imageAlt:
        'Ícone de uma casa com um coração, representando o cuidado de saúde domiciliar do ERP MadeLife.',
    },
    {
      title: 'ERP VM Agro Digital',
      problem:
        'Um ERP com mais de 20 módulos, construído como monolito MVC, precisava evoluir arquiteturalmente sem interromper a operação do negócio nem parar o ritmo de entregas.',
      solution:
        'Reescrita arquitetural do sistema para DDD e Clean Architecture, com decisões documentadas em ADRs; implantação da cobertura de testes automatizados do frontend do zero; construção de APIs REST e integrações críticas, entre elas a remessa bancária via TecnoSpeed. Na frente de liderança, condução de um time multidisciplinar de 8 pessoas (devs, PO, QA e UX/UI), com refinamento técnico e responsabilidade ponta a ponta por deploys, monitoramento e otimização de banco.',
      result:
        'Arquitetura modernizada e cobertura de testes estabelecida do zero, sustentando uma cadência de aproximadamente um release por semana sem interromper a operação do sistema legado.',
      image: '/project-vm-agro-digital.svg',
      imageAlt: 'Ícone de um trator, representando o agronegócio por trás do ERP VM Agro Digital.',
    },
  ];
}
