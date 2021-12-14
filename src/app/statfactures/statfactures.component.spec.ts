import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatfacturesComponent } from './statfactures.component';

describe('StatfacturesComponent', () => {
  let component: StatfacturesComponent;
  let fixture: ComponentFixture<StatfacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatfacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
