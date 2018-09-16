import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideogameComponent } from './addvideogame.component';

describe('AddvideogameComponent', () => {
  let component: AddvideogameComponent;
  let fixture: ComponentFixture<AddvideogameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvideogameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
