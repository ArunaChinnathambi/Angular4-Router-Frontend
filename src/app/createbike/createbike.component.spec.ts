import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBikeComponent } from './createbike.component';

describe('CreatebikeComponent', () => {
  let component: CreateBikeComponent;
  let fixture: ComponentFixture<CreateBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
