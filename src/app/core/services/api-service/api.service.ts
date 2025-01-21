import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/user-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
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

  getUsers() : Observable<UserProfile[]> {
    return new Observable((observer) => {
      observer.next(this.userProfiles);
      observer.complete();
    });
  }

  getUserById(id: number) : Observable<UserProfile> {
    for(const profile of this.userProfiles) {
      if (profile.userId === id) {
        return new Observable((observer) => {
          observer.next(profile);
          observer.complete();
        });
      }
    }

    return new Observable(observer => {
      observer.next({ userId: 0, name: "not-found" });
      observer.complete();
    });
  }
}
