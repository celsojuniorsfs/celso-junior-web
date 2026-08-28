import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza o h1 com o nome completo', () => {
    const h1: HTMLHeadingElement | null = fixture.nativeElement.querySelector('h1');

    expect(h1?.textContent?.trim()).toBe('Celso Luiz da Silva Júnior');
  });

  it('renderiza a imagem do avatar com alt descritivo', () => {
    const img: HTMLImageElement | null = fixture.nativeElement.querySelector('img');

    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBeTruthy();
  });
});
