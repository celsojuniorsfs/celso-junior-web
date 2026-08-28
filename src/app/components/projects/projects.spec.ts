import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o h2 com o título da seção', () => {
    const h2: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h2');

    expect(h2?.textContent?.trim()).toBe('Projetos');
  });

  it('renderiza os 3 cases', () => {
    const cards: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('app-project-card');

    expect(cards.length).toBe(3);
  });
});
