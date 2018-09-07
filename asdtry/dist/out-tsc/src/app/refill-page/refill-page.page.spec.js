"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var refill_page_page_1 = require("./refill-page.page");
describe('RefillPagePage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [refill_page_page_1.RefillPagePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(refill_page_page_1.RefillPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=refill-page.page.spec.js.map