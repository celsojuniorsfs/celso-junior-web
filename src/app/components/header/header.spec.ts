import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

function findLinkByText(root: HTMLElement, text: string): HTMLAnchorElement | undefined {
  return Array.from(root.querySelectorAll('a')).find((link) => link.textContent?.trim() === text);
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza os 5 itens do menu', () => {
    const labels = ['Início', 'Sobre', 'Serviços', 'Projetos', 'Contato'];

    for (const label of labels) {
      expect(findLinkByText(fixture.nativeElement, label)).toBeTruthy();
    }
  });

  it('renderiza o botão "Fale comigo" apontando pra âncora de contato', () => {
    const button = findLinkByText(fixture.nativeElement, 'Fale comigo');

    expect(button?.getAttribute('href')).toBe('#contact');
  });

  it('renderiza o botão "Baixar currículo" com o link e o atributo download', () => {
    const button = findLinkByText(fixture.nativeElement, 'Baixar currículo');

    expect(button?.getAttribute('href')).toBe('/CV_Celso_Luiz_da_Silva_Junior_Tech_Lead.pdf');
    expect(button?.hasAttribute('download')).toBe(true);
  });
});
