import { Component, signal } from '@angular/core';

type NavItem = { href: string; label: string };

@Component({
  imports: [],
  selector: 'app-header',
  template: `
    <header class="fixed inset-x-0 top-0 z-40 h-header border-b border-border bg-bg">
      <div class="mx-auto flex h-full max-w-page items-center justify-between px-6">
        <a href="#home" class="font-display text-xl font-semibold text-text">Celso Junior</a>

        <ul class="hidden items-center gap-10 md:flex">
          @for (item of navItems; track item.href) {
            <li>
              <a [href]="item.href" class="text-lg font-medium text-text-subtle hover:text-text">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <div class="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            class="rounded-card border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-on-accent"
          >
            Fale comigo
          </a>
          <a
            href="/CV_Celso_Luiz_da_Silva_Junior.pdf"
            download
            class="text-sm font-medium text-text-subtle hover:text-text"
          >
            Baixar currículo
          </a>
        </div>

        <button
          type="button"
          class="md:hidden"
          (click)="toggleMenu()"
          [attr.aria-expanded]="isMenuOpen()"
          aria-controls="mobile-menu"
        >
          {{ isMenuOpen() ? 'Fechar' : 'Menu' }}
        </button>
      </div>

      <ul
        id="mobile-menu"
        class="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden"
        [class.hidden]="!isMenuOpen()"
      >
        @for (item of navItems; track item.href) {
          <li>
            <a [href]="item.href" class="text-lg font-medium text-text-subtle hover:text-text">
              {{ item.label }}
            </a>
          </li>
        }
        <li>
          <a
            href="#contact"
            class="rounded-card border border-accent px-4 py-2 text-sm font-medium text-accent"
          >
            Fale comigo
          </a>
        </li>
        <li>
          <a
            href="/CV_Celso_Luiz_da_Silva_Junior.pdf"
            download
            class="text-sm font-medium text-text-subtle"
          >
            Baixar currículo
          </a>
        </li>
      </ul>
    </header>
  `,
})
export class Header {
  protected readonly navItems: NavItem[] = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ];

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }
}
