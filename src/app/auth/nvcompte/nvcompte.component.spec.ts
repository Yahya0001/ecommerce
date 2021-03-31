import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvcompteComponent } from './nvcompte.component';

describe('NvcompteComponent', () => {
  let component: NvcompteComponent;
  let fixture: ComponentFixture<NvcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvcompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
