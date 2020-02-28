import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDetailsComponent } from './hr-details.component';

describe('HrDetailsComponent', () => {
  let component: HrDetailsComponent;
  let fixture: ComponentFixture<HrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
