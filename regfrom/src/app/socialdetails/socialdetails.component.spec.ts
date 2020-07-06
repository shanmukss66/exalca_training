import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialdetailsComponent } from './socialdetails.component';

describe('SocialdetailsComponent', () => {
  let component: SocialdetailsComponent;
  let fixture: ComponentFixture<SocialdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
