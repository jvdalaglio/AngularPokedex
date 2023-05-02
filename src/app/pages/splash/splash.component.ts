import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.router.navigate(['onboarding'])
    }, 3000)
  }

}
