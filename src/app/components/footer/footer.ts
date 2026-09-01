import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../data/contact-info';

@Component({
  selector: 'app-footer',
  template: `
    <nav aria-label="Contato rápido" class="mx-auto max-w-page px-6 py-12">
      <ul class="flex flex-wrap justify-center gap-6">
        <li>
          <a
            [href]="'mailto:' + email"
            class="inline-block py-3 text-sm text-text-subtle hover:text-text"
          >
            {{ email }}
          </a>
        </li>
        <li>
          <a
            [href]="linkedinUrl"
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
export class Footer {
  protected readonly email = CONTACT_INFO.email;
  protected readonly linkedinUrl = CONTACT_INFO.linkedinUrl;
}
