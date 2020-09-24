import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile;
  repos;
  username: string;

  constructor(private profileService: ProfileService) { }

  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo()
      .subscribe(profile => {
        console.log(profile)
        this.profile = profile;
      });

    this.profileService.getProfileRepos()
      .subscribe(repos => {
        console.log(this.repos)
        this.repos = repos;
      });
  }

  ngOnInit(): void {
  }

}