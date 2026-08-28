import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  host: {
    class: 'flex flex-col gap-8 md:flex-row md:items-center md:gap-12',
  },
  imports: [NgOptimizedImage],
  selector: 'app-project-card',
  template: `
    <div class="overflow-hidden rounded-card md:w-2/5 md:shrink-0">
      <img [ngSrc]="image()" width="800" height="450" [alt]="imageAlt()" class="h-auto w-full" />
    </div>

    <div class="flex flex-col gap-6 md:w-3/5">
      <h3 class="text-subtitle font-bold text-text">{{ title() }}</h3>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-semibold text-accent">Problema</p>
        <p class="text-lead text-text-muted">{{ problem() }}</p>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-semibold text-accent">Solução</p>
        <p class="text-lead text-text-muted">{{ solution() }}</p>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-semibold text-accent">Resultado</p>
        <p class="text-lead text-text-muted">{{ result() }}</p>
      </div>
    </div>
  `,
})
export class ProjectCard {
  readonly title = input.required<string>();
  readonly problem = input.required<string>();
  readonly solution = input.required<string>();
  readonly result = input.required<string>();
  readonly image = input.required<string>();
  readonly imageAlt = input.required<string>();
}
