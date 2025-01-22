import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserProfileSearchComponent } from './page-user-profile-search.component';

describe('PageUserProfileSearchComponent', () => {
  let component: PageUserProfileSearchComponent;
  let fixture: ComponentFixture<PageUserProfileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUserProfileSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
