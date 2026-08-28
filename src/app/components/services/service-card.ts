import { Component, input } from '@angular/core';

@Component({
  host: {
    class:
      'flex flex-col gap-6 rounded-card border border-border bg-linear-to-br from-surface-raised to-surface p-6',
    role: 'listitem',
  },
  selector: 'app-service-card',
  template: `
    <div
      class="flex size-11 items-center justify-center rounded-card bg-accent/10"
      aria-hidden="true"
    >
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
    </div>

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
