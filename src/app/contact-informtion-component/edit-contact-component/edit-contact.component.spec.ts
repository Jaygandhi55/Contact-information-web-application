var jasmine = require('jasmine');
import { EditContactComponent } from './edit-contact.component';
import { controlData } from '../../control-data.service';

jasmine.describe("Should create edit contact component", function () {
    var component;

    jasmine.beforeEach(function () {
        component = new EditContactComponent();
        component.list = controlData.dataList; 
        component.zeroContact = false;
    });

    jasmine.it("should create object", function () {
        jasmine.expect(component).toBe(Object);
    });

    jasmine.it("should call afterView function", function () {
        component.ngAfterViewInit();
        jasmine.expect(component.zeroContact).toBe(controlData.dataList.length === 0 ? true : false);
    });

});