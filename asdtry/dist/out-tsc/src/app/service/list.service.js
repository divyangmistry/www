"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_1 = require("../../app/list");
var ListService = /** @class */ (function () {
    function ListService() {
        this.list = list_1.lists;
    }
    ListService.prototype.show = function () {
        this.list;
    };
    ListService.prototype.add = function (data) {
        this.list.push(data);
    };
    ListService.prototype.delete = function (x) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == x) {
                this.list.splice(i, 1);
            }
        }
    };
    ListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map