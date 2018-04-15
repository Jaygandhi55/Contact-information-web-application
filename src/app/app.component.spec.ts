var jasmine = require('jasmine');
import { AppComponent } from './app.component';

jasmine.describe("Should create app component", function () {
    var component;

    jasmine.beforeEach(function () {
        component = new AppComponent();
    });

    jasmine.it("should create object", function () {
        jasmine.expect(component).toBe(Object);
    });
});