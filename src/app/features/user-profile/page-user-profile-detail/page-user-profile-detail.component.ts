import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../../../core/models/user-profile';
import { ApiService } from '../../../core/services/api-service/api.service';

@Component({
  selector: 'app-page-user-profile-detail',
  imports: [],
  templateUrl: './page-user-profile-detail.component.html',
  styleUrl: './page-user-profile-detail.component.scss'
})
export class PageUserProfileDetailComponent {
  profile: UserProfile | undefined;

  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly apiService: ApiService
  ) {
    
  } 

  ngOnInit() {
    const profileId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getUserById(profileId).subscribe(value => {
      this.profile = value
    });
  }

  goToBackToProfiles() {
    this.router.navigate([`./user`]);
  }
}
