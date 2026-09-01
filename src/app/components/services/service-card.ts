import { Component, input } from '@angular/core';
import { IconBadge } from '../icon-badge/icon-badge';
import { CARD_CHROME_CLASS } from '../../shared/card-chrome';

@Component({
  host: {
    class: `flex flex-col gap-6 ${CARD_CHROME_CLASS}`,
    role: 'listitem',
  },
  imports: [IconBadge],
  selector: 'app-service-card',
  template: `
    <app-icon-badge>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6 text-accent"
      >
        @for (path of iconPaths(); track path) {
          <path [attr.d]="path" />
        }
      </svg>
    </app-icon-badge>

    <div class="flex flex-col gap-2">
      <h3 class="text-sm font-semibold text-text">{{ title() }}</h3>
      <p class="text-sm text-text-muted">{{ description() }}</p>
    </div>
  `,
})
export class ServiceCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly iconPaths = input.required<readonly string[]>();
}
