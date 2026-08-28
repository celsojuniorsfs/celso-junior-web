import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza os 2 links com os href corretos', () => {
    const links: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('a');
    const hrefs = [...links].map((link) => link.getAttribute('href'));

    expect(hrefs).toEqual([
      'mailto:celsosilva@outlook.com',
      'https://linkedin.com/in/celso-junior-347a21a8',
    ]);
  });

  it('não menciona nenhum ano no copyright', () => {
    const text: string = fixture.nativeElement.textContent;

    expect(text).not.toMatch(/\d{4}/);
  });
});
