import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // constructor() { }

  constructor(private router:Router){}

  Acerca() {
    this.router.navigate(['acerca']);
  }
  Contacto() {
    this.router.navigate(['contacto']);
  }
  Inicio() {
    this.router.navigate(['inicio']);
  }
  Menu() {
    this.router.navigate(['menu']);
  }

  ngOnInit(): void {
  }

}
