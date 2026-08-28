import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div class="flex flex-col items-center gap-8 py-section">
      <h2 id="skills-title" class="text-lg font-semibold text-accent">Principais tecnologias</h2>

      <ul class="flex w-full flex-wrap justify-center gap-3">
        @for (skill of skills; track skill) {
          <li class="rounded-full border border-border px-5 py-2 text-base text-text-subtle">
            {{ skill }}
          </li>
        }
      </ul>
    </div>
  `,
})
export class Skills {
  protected readonly skills: string[] = [
    'PHP 8',
    'Laravel',
    'Angular',
    'TypeScript',
    'Docker',
    'MySQL',
    'SQL Server',
    'Redis',
    'GitLab CI/CD',
  ];
}
