import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterayonComponent } from './updaterayon.component';

describe('UpdaterayonComponent', () => {
  let component: UpdaterayonComponent;
  let fixture: ComponentFixture<UpdaterayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
