import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzasWolnyComponent } from './czas-wolny.component';

describe('CzasWolnyComponent', () => {
  let component: CzasWolnyComponent;
  let fixture: ComponentFixture<CzasWolnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzasWolnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzasWolnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
