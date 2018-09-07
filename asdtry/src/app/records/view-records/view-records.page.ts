import { Component, OnInit } from '@angular/core';
import { ParamS } from '../../param-s';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.page.html',
  styleUrls: ['./view-records.page.scss'],
})
export class ViewRecordsPage {

  record: any = {};

  constructor(
    // private Params: ParamS,
    private param: NavParams
  ) {
    // this.record = this.param.get('record');
    this.record = this.param.get('record');
  }

}
