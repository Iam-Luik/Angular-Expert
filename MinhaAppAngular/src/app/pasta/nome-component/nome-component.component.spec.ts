import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponentComponent } from './nome-component.component';

describe('NomeComponentComponent', () => {
  let component: NomeComponentComponent;
  let fixture: ComponentFixture<NomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
