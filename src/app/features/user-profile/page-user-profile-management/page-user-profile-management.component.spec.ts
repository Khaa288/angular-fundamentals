import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserProfileManagementComponent } from './page-user-profile-management.component';

describe('PageUserProfileManagementComponent', () => {
  let component: PageUserProfileManagementComponent;
  let fixture: ComponentFixture<PageUserProfileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUserProfileManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
