import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-approach',
  templateUrl: './approach.page.html',
  styleUrls: ['./approach.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButton,
    IonIcon
  ]
})
export class ApproachPage implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {
  }

  closePage() {
    this.location.back();
  }
}