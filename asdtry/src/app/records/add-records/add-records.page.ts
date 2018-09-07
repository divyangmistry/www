import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, Platform, ModalController } from '@ionic/angular';
// import { CommonService } from '../../service/common-service.service';
import { Sql } from '../../service/sql.service';
import { Router } from '@angular/router';
import { ParamS } from '../../param-s';
// import { AuthService } from "../../service/auth.service";
// import { Camera } from '@ionic-native/camera';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { File } from '@ionic-native/file';


@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.page.html',
  styleUrls: ['./add-records.page.scss'],
})
export class AddRecordsPage {

  data: any;
  title: any;
  description: any;
  public lastImage: any;

  constructor(
    // private camera: Camera,
    // private transfer: FileTransfer,
    // private file: File,
    // private actionSheetCtrl: ActionSheetController,
    // private filePath: FilePath,
    // private commonService: CommonService,
    private sql: Sql,
    private navCtrl: NavController,
    private params: ParamS,
    // private platform: Platform,
    // private viewCtrl: ModalController,
    // private service: AuthService
  ) {
  }
  
  upload() {

    this.params.titleRecord = this.title,
    this.params.descriptionRecord = this.description

    let data = ({
      title: this.title,
      description: this.description,
    })
    
    console.log(this.title)
    console.log(this.description)
    
    this.sql.set('records', JSON.stringify(data))
    this.navCtrl.goBack();
  }

  // async presentActionSheet() {
  //   let actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Upload a photo using',
  //     buttons: [
  //       {
  //         text: 'Gallery',
  //         handler: () => {
  //           this.loadFromGallery();
  //         }
  //       }, {
  //         text: 'Camera',
  //         handler: () => {
  //           this.photo();
  //         }
  //       }, {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //         }
  //       }
  //     ]
  //   });
  //   await actionSheet.present();
  // }

  // loadFromGallery() {
  //   this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  // }

  // photo() {
  //   this.takePicture(this.camera.PictureSourceType.CAMERA);
  // }

  // takePicture(sourceType) {
  //   // Create options for the Camera Dialog
  //   var options = {
  //     quality: 100,
  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };

  //   // Get the data of an image
  //   this.camera.getPicture(options).then((imagePath) => {
  //     // Special handling for Android library
  //     if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
  //       this.filePath.resolveNativePath(imagePath)
  //         .then(filePath => {
  //           let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
  //           let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
  //           this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //         });
  //     } else {
  //       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  //       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  //       this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //     }
  //   }, (err) => {
  //     this.commonService.toast('Error while selecting image.');
  //   });
  // }

  // // Create a new name for the image
  // private createFileName() {
  //   var d = new Date(),
  //     n = d.getTime(),
  //     newFileName = n + ".jpeg";
  //   return newFileName;
  // }

  // // Copy the image to a local folder
  // private copyFileToLocalDir(namePath, currentName, newFileName) {
  //   this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then((success) => {
  //     this.lastImage = newFileName;

  //     // this.uploadImage();
  //   }, (error) => {
  //     this.commonService.toast('Error while storing file.');
  //   });
  // }
  // // Always get the accurate path to your apps folder
  // pathForImage(img) {
  //   if (img === null) {
  //     return '';
  //   } else {
  //     return cordova.file.dataDirectory + img;
  //   }
  // }

  // upload() {
  //   if (
  //     !!this.lastImage && 
  //     !!this.title && !!this.description) {
  //     // this.commonService.presentLoading();
  //     this.platform.ready().then(() => {
  //       this.sql.get('token').then((data) => {
  //         let userDetails = {
  //           title: this.title,
  //           description: this.description,
  //           token: data
  //         }

  //         let url = this.service.LOGIN_URL + "medical-records";
  //         // File for Upload
  //         let targetPath = this.pathForImage(this.lastImage);

  //         // File name only
  //         let filename = this.lastImage;

  //         let options = {
  //           fileKey: "file",
  //           fileName: filename,
  //           mimeType: "multipart/form-data",
  //           params: userDetails
  //         };
  //         const fileTransfer: FileTransferObject = this.transfer.create();
  //         // Use the FileTransfer to upload the image
  //         fileTransfer.upload(targetPath, encodeURI(url), options).then((response) => {
  //           this.commonService.dismissLoading();
  //           this.commonService.toast("Medical Records added Successfully.");
  //           this.viewCtrl.dismiss();
  //         });
  //       });
  //     });
  //   } else {
  //     this.commonService.toast("Please fill all fields");
  //   }

  // }

}
