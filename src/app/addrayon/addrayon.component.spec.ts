import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrayonComponent } from './addrayon.component';

describe('AddrayonComponent', () => {
  let component: AddrayonComponent;
  let fixture: ComponentFixture<AddrayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
