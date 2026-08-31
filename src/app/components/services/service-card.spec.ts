import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCard } from './service-card';

describe('ServiceCard', () => {
  let component: ServiceCard;
  let fixture: ComponentFixture<ServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Desenvolvimento Backend');
    fixture.componentRef.setInput(
      'description',
      'APIs REST robustas e sistemas backend em PHP 8 e Laravel.',
    );
    fixture.componentRef.setInput('iconPaths', ['M4 4h16v16H4z', 'M8 8h8v8H8z']);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o título e a descrição recebidos por input', () => {
    const h3: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h3');
    const description: HTMLParagraphElement | null = fixture.nativeElement.querySelector('p');

    expect(h3?.textContent?.trim()).toBe('Desenvolvimento Backend');
    expect(description?.textContent?.trim()).toBe(
      'APIs REST robustas e sistemas backend em PHP 8 e Laravel.',
    );
  });

  it('renderiza um <path> de ícone pra cada item de iconPaths', () => {
    const paths: NodeListOf<SVGPathElement> = fixture.nativeElement.querySelectorAll('svg path');

    expect(paths.length).toBe(2);
    expect(paths[0].getAttribute('d')).toBe('M4 4h16v16H4z');
    expect(paths[1].getAttribute('d')).toBe('M8 8h8v8H8z');
  });
});
