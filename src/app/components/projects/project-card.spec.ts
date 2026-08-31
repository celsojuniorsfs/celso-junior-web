import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Portal Flash Cover');
    fixture.componentRef.setInput('problem', 'Processos manuais de apoio ao ERP.');
    fixture.componentRef.setInput('solution', 'Portal web e integrações de apoio ao ERP.');
    fixture.componentRef.setInput('result', 'Rotinas automatizadas e integradas ao ERP.');
    fixture.componentRef.setInput('image', '/project-flash-cover.svg');
    fixture.componentRef.setInput('imageAlt', 'Ícone de fábrica.');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o título recebido por input', () => {
    const h3: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h3');

    expect(h3?.textContent?.trim()).toBe('Portal Flash Cover');
  });

  it('renderiza problema, solução e resultado', () => {
    const text: string = fixture.nativeElement.textContent;

    expect(text).toContain('Processos manuais de apoio ao ERP.');
    expect(text).toContain('Portal web e integrações de apoio ao ERP.');
    expect(text).toContain('Rotinas automatizadas e integradas ao ERP.');
  });

  it('renderiza a imagem com alt descritivo', () => {
    const img: HTMLImageElement | null = fixture.nativeElement.querySelector('img');

    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBe('Ícone de fábrica.');
  });
});
