import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home.component';
import { FormPage } from '../form/form.component';
import { NavigationPage } from '../navigation/navigation.component';


@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  Root = HomePage;
  Root1 = FormPage;
  Root2 = NavigationPage;


  constructor(public navCtrl: NavController) {}

}
