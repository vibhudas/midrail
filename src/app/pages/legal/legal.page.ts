import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
 selector: 'app-legal',
 templateUrl: './legal.page.html',
 styleUrls: ['./legal.page.scss'],
 standalone: true,
 imports: [
   IonIcon,
   IonButton,
   IonContent,
   IonHeader,
   IonTitle,
   IonToolbar,
   CommonModule,
   FormsModule,
   RouterModule
 ]
})
export class LegalPage implements OnInit {
 constructor(private router: Router) {
   addIcons({ closeOutline });
 }

 closePage() {
   this.router.navigate(['/']);
 }

 ngOnInit() {
 }
}