import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza a lista como ul com 9 li', () => {
    const list: HTMLUListElement | null = fixture.nativeElement.querySelector('ul');
    const items: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('li');

    expect(list).toBeTruthy();
    expect(items.length).toBe(9);
  });

  it('não lista tecnologias fora da stack atual', () => {
    const text: string = fixture.nativeElement.textContent;

    expect(text).not.toContain('jQuery');
    expect(text).not.toContain('Bootstrap');
    expect(text).not.toContain('VBA');
    expect(text).not.toContain('Xamarin');
    expect(text).not.toContain('.NET Core');
    expect(text).not.toContain('RavenDB');
  });
});
