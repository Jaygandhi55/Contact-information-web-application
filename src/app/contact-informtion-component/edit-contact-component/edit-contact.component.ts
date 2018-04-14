import { Component } from '@angular/core';
import { controlData } from '../../control-data.service';

@Component({
  selector: 'edit-contact-component',
  templateUrl: './edit-contact.component.html',
  styleUrls: [ './edit-contact.component.css' ]
})
export class EditContactComponent  {
    public list:any = controlData.dataList; 
    public zeroContact:any = false;

    ngAfterViewInit() {
        window.scroll(0,0);
        this.zeroContact = controlData.dataList.length === 0 ? true : false; 
    }


}