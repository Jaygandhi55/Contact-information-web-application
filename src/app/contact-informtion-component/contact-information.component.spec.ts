var jasmine = require('jasmine');
import { ContactInformationComponent } from './contact-information.component';

jasmine.describe("Should create contact information component", function () {
    var component;

    jasmine.beforeEach(function () {
        component = new ContactInformationComponent();
    });

    jasmine.it("should create object", function () {
        jasmine.expect(component).toBe(Object);
    });
});