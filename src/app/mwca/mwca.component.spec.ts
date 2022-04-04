import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWCAComponent } from './mwca.component';

describe('MWCAComponent', () => {
  let component: MWCAComponent;
  let fixture: ComponentFixture<MWCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MWCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
