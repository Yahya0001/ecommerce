import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeHistoriqueComponent } from './commande-historique.component';

describe('CommandeHistoriqueComponent', () => {
  let component: CommandeHistoriqueComponent;
  let fixture: ComponentFixture<CommandeHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
