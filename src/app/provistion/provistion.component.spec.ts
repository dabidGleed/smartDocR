import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvistionComponent } from './provistion.component';

describe('ProvistionComponent', () => {
  let component: ProvistionComponent;
  let fixture: ComponentFixture<ProvistionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvistionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvistionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
