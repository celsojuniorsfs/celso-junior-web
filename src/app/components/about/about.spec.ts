import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o h2 com o título da seção', () => {
    const h2: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h2');

    expect(h2?.textContent?.trim()).toBe('Sobre mim');
  });

  it('menciona a cidade e a disponibilidade', () => {
    const text: string = fixture.nativeElement.textContent;

    expect(text).toContain('Santa Fé do Sul');
    expect(text).toContain('remotas');
  });
});
