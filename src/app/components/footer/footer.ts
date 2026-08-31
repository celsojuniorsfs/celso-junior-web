import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav aria-label="Contato rápido" class="mx-auto max-w-page px-6 py-12">
      <ul class="flex flex-wrap justify-center gap-6">
        <li>
          <a
            href="mailto:celsosilva@outlook.com"
            class="inline-block py-3 text-sm text-text-subtle hover:text-text"
          >
            celsosilva@outlook.com
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/celso-junior-347a21a8"
            target="_blank"
            rel="noopener"
            class="inline-block py-3 text-sm text-text-subtle hover:text-text"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>

    <div class="border-t border-border">
      <p class="mx-auto max-w-page px-6 py-6 text-center text-sm text-text-subtle">
        © Todos os direitos reservados.
      </p>
    </div>
  `,
})
export class Footer {}
