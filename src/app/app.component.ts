import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Recipe Book');
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBX0Jt2-A2j5XvdcFWrcWuJ5HImDI1GQ-A",
      authDomain: "ng-recipe-book-d0cf6.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
