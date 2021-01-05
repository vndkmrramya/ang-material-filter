import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableTextButtonFilterComponent } from './mat-table-text-button-filter.component';

describe('MatTableTextButtonFilterComponent', () => {
  let component: MatTableTextButtonFilterComponent;
  let fixture: ComponentFixture<MatTableTextButtonFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableTextButtonFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableTextButtonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
