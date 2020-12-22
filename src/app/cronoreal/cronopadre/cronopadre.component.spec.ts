import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronopadreComponent } from './cronopadre.component';

describe('CronopadreComponent', () => {
  let component: CronopadreComponent;
  let fixture: ComponentFixture<CronopadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronopadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronopadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
