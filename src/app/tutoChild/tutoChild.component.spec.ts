import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoChildComponent } from './tutoChild.component';

describe('TutoComponent', () => {
  let component: TutoChildComponent;
  let fixture: ComponentFixture<TutoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
