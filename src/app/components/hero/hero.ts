import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <div class="flex flex-col items-center gap-6 py-section text-center">
      <img
        ngSrc="/avatar-hero.jpg"
        width="192"
        height="192"
        priority
        alt="Retrato de Celso Luiz da Silva Júnior"
        class="rounded-full"
      />

      <h1 class="text-display font-display font-bold text-text">Celso Luiz da Silva Júnior</h1>

      <p class="text-subtitle font-display font-semibold text-accent">
        Desenvolvedor Full Stack &amp; Tech Lead | PHP 8/Laravel · Angular/TypeScript
      </p>

      <p class="max-w-3xl text-lead text-text-muted">
        Full stack com 8 anos de experiência em sistemas ERP corporativos de grande porte, do código
        à liderança técnica. Atuo ponta a ponta em PHP 8/Laravel e Angular/TypeScript, e conduzo a
        evolução arquitetural desses sistemas ao lado de times multidisciplinares.
      </p>
    </div>
  `,
})
export class Hero {}
