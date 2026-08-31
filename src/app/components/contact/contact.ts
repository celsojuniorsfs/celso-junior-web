import { Component } from '@angular/core';
import { SectionHeading } from '../section-heading/section-heading';
import { IconBadge } from '../icon-badge/icon-badge';
import { CARD_CHROME_CLASS } from '../../shared/card-chrome';
import { CONTACT_INFO } from '../../data/contact-info';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

@Component({
  imports: [SectionHeading, IconBadge],
  selector: 'app-contact',
  template: `
    <div class="flex flex-col items-center gap-12 py-section">
      <app-section-heading
        headingId="contact-title"
        title="Contato"
        subtitle="Vamos conversar sobre a próxima oportunidade."
        variant="lead"
      />

      <div class="grid w-full gap-6 sm:grid-cols-3">
        @for (link of links; track link.label) {
          <a
            [href]="link.href"
            [attr.target]="link.external ? '_blank' : null"
            [attr.rel]="link.external ? 'noopener' : null"
            [class]="cardClass"
          >
            <app-icon-badge>
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
            </app-icon-badge>

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
  protected readonly cardClass = `flex flex-col items-center gap-4 ${CARD_CHROME_CLASS} text-center`;

  protected readonly links: ContactLink[] = [
    {
      label: 'E-mail',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: CONTACT_INFO.linkedinDisplay,
      href: CONTACT_INFO.linkedinUrl,
      external: true,
    },
    {
      label: 'WhatsApp',
      value: CONTACT_INFO.whatsappDisplay,
      href: CONTACT_INFO.whatsappHref,
      external: false,
    },
  ];
}
