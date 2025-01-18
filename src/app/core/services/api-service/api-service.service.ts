import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  userProfiles : UserProfile[];

  constructor() { 
    this.userProfiles = [
      {
        userId: 1,
        name: "John Doe"
      },
      {
        userId: 2,
        name: "Jane Doe"
      },
      {
        userId: 3,
        name: "John Smith"
      }
    ]
  }

  getUsers() : UserProfile[] {
    return this.userProfiles;
  }

  getUserById(id: number) : UserProfile {
    for(const profile of this.userProfiles) {
      if (profile.userId === id) {
        return profile;
      }
    }

    return { userId: 0, name: "not-found" };
  }
}
