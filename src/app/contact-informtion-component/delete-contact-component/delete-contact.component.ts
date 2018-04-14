import { Component, ChangeDetectorRef } from '@angular/core';
import { controlData } from '../../control-data.service';

@Component({
  selector: 'delete-contact-component',
  templateUrl: './delete-contact.component.html',
  styleUrls: [ './delete-contact.component.css' ]
})

export class DeleteContactComponent  {
 public list:any = controlData.dataList; 
 public selectedValue:any;
 public zeroContact:any = false;

    ngAfterViewInit() {
      window.scroll(0,0);
      this.zeroContact = controlData.dataList.length === 0 ? true : false;
    }

    constructor(private _ChangeDetectorRef:ChangeDetectorRef){

    }

    deleteDetails(value: any): void{
        this.selectedValue = value;
    }

    deleteAnyway(): void{
      this.list = controlData.dataList = controlData.dataList.filter((data:any) => data.email !== this.selectedValue);
      this.zeroContact = controlData.dataList.length === 0 ? true : false;
        this._ChangeDetectorRef.detectChanges();
    }
}