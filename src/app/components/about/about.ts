import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="flex flex-col items-center gap-12 py-section">
      <div class="text-center">
        <h2 id="about-title" class="text-title font-extrabold text-text">Sobre mim</h2>
        <p class="text-sm font-semibold text-accent">Um pouco da minha trajetória</p>
      </div>

      <div class="mx-auto flex max-w-3xl flex-col gap-6 text-lead text-text-muted">
        <p>
          Sou desenvolvedor full stack há 8 anos, com toda a trajetória dedicada a sistemas ERP
          corporativos de grande porte, ambientes onde o legado não pode parar enquanto evolui. Atuo
          ponta a ponta: backend em PHP 8 e Laravel, frontend em Angular e TypeScript, e cada vez
          mais também na camada de decisão técnica que sustenta esses dois lados.
        </p>

        <p>
          Conduzi a reescrita arquitetural completa de um ERP com mais de 20 módulos, migrando de um
          monolito MVC para DDD e Clean Architecture, e implantei do zero a cobertura de testes
          automatizados do frontend, definindo padrões e capacitando o time no processo. Tenho
          experiência sólida em APIs REST e em integrações com ERPs de mercado, como TOTVS Protheus
          e Senior Mega, e com serviços financeiros como a TecnoSpeed.
        </p>

        <p>
          Mais recentemente, passei a liderar tecnicamente um time multidisciplinar (devs, PO, QA e
          UX/UI), sustentando uma cadência semanal de releases sem interromper a operação do sistema
          em produção. Isso significa fazer o meio-campo entre produto e engenharia: refinar
          histórias, quebrá-las em tarefas técnicas, documentar decisões de arquitetura em ADRs e
          revisar código, sem abrir mão da atuação hands-on. Meu dia a dia inclui Docker, Redis,
          MySQL/SQL Server e pipelines de CI/CD no GitLab.
        </p>

        <p>
          Moro em Santa Fé do Sul – SP e estou disponível para oportunidades remotas ou híbridas,
          em regime CLT ou PJ.
        </p>
      </div>
    </div>
  `,
})
export class About {}
