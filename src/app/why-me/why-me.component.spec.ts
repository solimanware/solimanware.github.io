import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeComponent } from './why-me.component';

describe('WhyMeComponent', () => {
  let component: WhyMeComponent;
  let fixture: ComponentFixture<WhyMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
