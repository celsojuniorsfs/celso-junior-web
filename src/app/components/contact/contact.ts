import { Component } from '@angular/core';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

@Component({
  selector: 'app-contact',
  template: `
    <div class="flex flex-col items-center gap-12 py-section">
      <div class="text-center">
        <h2 id="contact-title" class="text-title font-extrabold text-text">Contato</h2>
        <p class="text-lead text-text-muted">Vamos conversar sobre a próxima oportunidade.</p>
      </div>

      <div class="grid w-full gap-6 sm:grid-cols-3">
        @for (link of links; track link.label) {
          <a
            [href]="link.href"
            [attr.target]="link.external ? '_blank' : null"
            [attr.rel]="link.external ? 'noopener' : null"
            class="flex flex-col items-center gap-4 rounded-card border border-border bg-linear-to-br from-surface-raised to-surface p-6 text-center"
          >
            <div
              class="flex size-11 items-center justify-center rounded-card bg-accent/10"
              aria-hidden="true"
            >
              @switch (link.label) {
                @case ('E-mail') {
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-6 text-accent"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                }
                @case ('LinkedIn') {
                  <svg viewBox="0 0 24 24" class="size-6 text-accent">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <text
                      x="12"
                      y="16.5"
                      text-anchor="middle"
                      font-size="10"
                      font-weight="700"
                      fill="currentColor"
                      font-family="Inter, sans-serif"
                    >
                      in
                    </text>
                  </svg>
                }
                @case ('WhatsApp') {
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-6 text-accent"
                  >
                    <path
                      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                    />
                  </svg>
                }
              }
            </div>

            <div class="flex flex-col gap-1">
              <p class="text-sm font-semibold text-accent">{{ link.label }}</p>
              <p class="text-base text-text-muted">{{ link.value }}</p>
            </div>
          </a>
        }
      </div>
    </div>
  `,
})
export class Contact {
  protected readonly links: ContactLink[] = [
    {
      label: 'E-mail',
      value: 'celsosilva@outlook.com',
      href: 'mailto:celsosilva@outlook.com',
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/celso-junior-347a21a8',
      href: 'https://linkedin.com/in/celso-junior-347a21a8',
      external: true,
    },
    {
      label: 'WhatsApp',
      value: '(17) 99738-1979',
      href: 'https://wa.me/5517997381979',
      external: false,
    },
  ];
}
