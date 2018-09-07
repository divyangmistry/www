import { Component, OnInit } from '@angular/core';
import { NavController, App, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // @ViewChild(Slides) slides: Slides;

  ngOnInit() {
  }

  private count: number = 0;

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
    // private dashBoardService: DashBoardService,
    private platform: Platform,
    private route: Router
  ) {

  }

  ionViewWillEnter() {
    // this.dashBoardService.validateToken().subscribe((res) => {
    //   if (res.message === 'Authorised') {
    //   } else {
    //     this.route.navigateByUrl('login');
    //   }
    // });
    // this.slides.startAutoplay()
  }

  addPrescription() {
    this.route.navigate(['addPrescription'])
  }

  refillScreen() {
    this.route.navigate(['refillPage'])
  }

  orders() {
    this.route.navigate(['orders'])
  }

  // search() {
  //   let searchModal = this.modalCtrl.create(SearchMedicinePage, { page: 'dashboard' });

  //   searchModal.present();
  // }

  // quickCall() {
  //   this.tabs.select(2);
  // }

  // cart() {
  // }

}
