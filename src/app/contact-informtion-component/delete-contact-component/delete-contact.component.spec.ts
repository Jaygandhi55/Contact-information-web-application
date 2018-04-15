var jasmine = require('jasmine');
import { Component, ChangeDetectorRef } from '@angular/core';
import { DeleteContactComponent } from './delete-contact.component';
import { controlData } from '../../control-data.service';

jasmine.describe("Should create delete contact component", function () {
    var component;

    jasmine.beforeEach(function () {
      const _ChangeDetectorRef = jasmine.spyOn((component as any).cdRef, 'detectChanges');
        component = new DeleteContactComponent(_ChangeDetectorRef);
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

    jasmine.it("should call deleteDetails function", function () {
        component.deleteDetails('jay1gandhi@jay.com');
        jasmine.expect(component.selectedValue).toBe('jay1gandhi@jay.com');
    });

    jasmine.it("should call deletAnyway function", function () {
        component.deleteAnyway();
        jasmine.expect(component.zeroContact).toBe(controlData.dataList.length === 0 ? true : false);
    });

});