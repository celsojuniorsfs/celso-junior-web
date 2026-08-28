import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza os 3 links com os href corretos', () => {
    const links: HTMLAnchorElement[] = fixture.nativeElement.querySelectorAll('a');
    const hrefs = [...links].map((link) => link.getAttribute('href'));

    expect(hrefs).toEqual([
      'mailto:celsosilva@outlook.com',
      'https://linkedin.com/in/celso-junior-347a21a8',
      'https://wa.me/5517997381979',
    ]);
  });

  it('abre o LinkedIn em nova aba com rel=noopener', () => {
    const linkedin: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      'a[href="https://linkedin.com/in/celso-junior-347a21a8"]',
    );

    expect(linkedin?.getAttribute('target')).toBe('_blank');
    expect(linkedin?.getAttribute('rel')).toBe('noopener');
  });

  it('não tem target/rel no e-mail e no WhatsApp', () => {
    const mail: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      'a[href="mailto:celsosilva@outlook.com"]',
    );

    expect(mail?.getAttribute('target')).toBeNull();
    expect(mail?.getAttribute('rel')).toBeNull();
  });
});
