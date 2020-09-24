import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://api.github.com/users/';
  private username: string;
  private clientId = 'b83e7b07445caec76db8';
  private clientSecret = '68bd045701b073c346a1d9ae536b34c7d4251d0e'
  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'MaiA14';
  }

  getProfileInfo() {
    return this.http.get<any>(this.apiUrl +
    this.username + "?client_id=" + this.clientId +
    "&client_secret=" + this.clientSecret);
  };

  getProfileRepos() {
    return this.http.get<any>(this.apiUrl +
    this.username  + "/repos?client_id=" +
     this.clientId + "&client_secret=" + this.clientSecret);
  };

  updateProfile(username: string) {
    this.username = username;
  }
}
