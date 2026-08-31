import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="text-center">
      <h2 [id]="headingId()" class="text-title font-extrabold text-text">{{ title() }}</h2>
      <p [class]="subtitleClass()">{{ subtitle() }}</p>
    </div>
  `,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly variant = input<'eyebrow' | 'lead'>('eyebrow');

  protected readonly subtitleClass = computed(() =>
    this.variant() === 'lead' ? 'text-lead text-text-muted' : 'text-sm font-semibold text-accent',
  );
}
