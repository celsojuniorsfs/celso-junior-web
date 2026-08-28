import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Services } from './services';

describe('Services', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
    }).compileComponents();

    fixture = TestBed.createComponent(Services);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o h2 com o título da seção', () => {
    const h2: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h2');

    expect(h2?.textContent?.trim()).toBe('Serviços');
  });

  it('renderiza os 5 cards de serviço', () => {
    const cards: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('app-service-card');

    expect(cards.length).toBe(5);
  });
});
