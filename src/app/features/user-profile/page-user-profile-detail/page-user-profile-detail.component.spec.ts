import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserProfileDetailComponent } from './page-user-profile-detail.component';

describe('PageUserProfileDetailComponent', () => {
  let component: PageUserProfileDetailComponent;
  let fixture: ComponentFixture<PageUserProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUserProfileDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
