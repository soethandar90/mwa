import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'
  ]
})


export class NavigationComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

}
