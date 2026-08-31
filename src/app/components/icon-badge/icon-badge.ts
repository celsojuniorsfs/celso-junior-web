import { Component } from '@angular/core';

@Component({
  host: {
    class: 'flex size-11 items-center justify-center rounded-card bg-accent/10',
    'aria-hidden': 'true',
  },
  selector: 'app-icon-badge',
  template: `<ng-content />`,
})
export class IconBadge {}
