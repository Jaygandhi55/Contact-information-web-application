import { Component, ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { controlData } from '../../control-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-contact-component',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  public firstName: any = "";
  public lastName: any = "";
  public emailId: any = "";
  public phoneNo: any = "";
  public status: any = "";
  public DuplicateEntry: any = false;
  public contactAdded: any = false;
  public emailPattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$";
  public subscribeData: any;
  public indexValue: any;
  public heading:any = "Add new";


  ngAfterViewInit() {
    window.scroll(0, 0);
    this.DuplicateEntry = false;
    this.contactAdded = false;
    this.heading = "Add new"
    this.route.queryParams.subscribe(data => {
      this.subscribeData = data;
      console.log(data);
      if (this.subscribeData.firstName && this.subscribeData.lastName && this.subscribeData.email && this.subscribeData.mobile && this.subscribeData.status) {
        this.heading = "Update"
        this.firstName = this.subscribeData.firstName;
        this.lastName = this.subscribeData.lastName;
        this.emailId = this.subscribeData.email;
        this.phoneNo = this.subscribeData.mobile;
        this.status = this.subscribeData.status;
        this._ChangeDetectorRef.detectChanges();
      }
    });

  }


  constructor(private route: ActivatedRoute, private router: Router, private _ChangeDetectorRef: ChangeDetectorRef) {

  }


  resetAll(FirstName: any, LastName: any, Email: any, Phone: any) {
    FirstName.reset();
    LastName.reset();
    Email.reset();
    Phone.reset();
    this.status = "";
    this.subscribeData = {};
    this.heading = "Add new";
    this.DuplicateEntry = false;
    this.contactAdded = false;
    this._ChangeDetectorRef.detectChanges();
  }

  saveDetails() {
    if (this.subscribeData.firstName) {
      let updatedIndex = -1;
        for(let i = 0; i<controlData.dataList.length; i++){
              if(this.subscribeData.index === controlData.dataList[i].index){
                  updatedIndex = i;
                  break;
              }
        }

        for(let i = 0; i<controlData.dataList.length; i++){
              if(controlData.dataList[i].email === this.emailId && this.subscribeData.index !== controlData.dataList[i].index){
                  this.contactAdded = !(this.DuplicateEntry = true);
                  break;
              }
              else{
                this.DuplicateEntry = false;
              }
        }

        if(!this.DuplicateEntry && updatedIndex !== -1){
            controlData.dataList[updatedIndex].firstName = this.firstName;
            controlData.dataList[updatedIndex].lastName = this.lastName;
            controlData.dataList[updatedIndex].email = this.emailId;
            controlData.dataList[updatedIndex].mobile = this.phoneNo;
            controlData.dataList[updatedIndex].status = this.status;

            this.contactAdded = true;
            this.firstName = this.lastName = this.emailId = this.phoneNo = this.status = "";
            this.subscribeData = {};
        }
    }
    else {
      let list = controlData.dataList.filter((data: any) => data.email === this.emailId);
      if (list.length > 0) {
        this.contactAdded = !(this.DuplicateEntry = true);
      }
      else {
        let obj = {'index':  (controlData.dataList.length+1).toString(), 'firstName': this.firstName, 'lastName': this.lastName, 'email': this.emailId, 'mobile': this.phoneNo, 'status': this.status };
        controlData.dataList.push(obj);
        this.contactAdded = !(this.DuplicateEntry = false);
        this.firstName = this.lastName = this.emailId = this.phoneNo = this.status = "";
      }
    }
    this._ChangeDetectorRef.detectChanges();
    window.scroll(0, 0);
  }
}