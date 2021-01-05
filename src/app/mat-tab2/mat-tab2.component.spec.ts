import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTab2Component } from './mat-tab2.component';

describe('MatTab2Component', () => {
  let component: MatTab2Component;
  let fixture: ComponentFixture<MatTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
