import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../Models/Account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
