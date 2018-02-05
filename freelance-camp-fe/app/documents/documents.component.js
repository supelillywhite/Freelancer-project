"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = 'Document Dashboard';
        this.documents = [
            {
                title: "My First Doc",
                description: "Hey you hippies",
                file_url: "http://google.com",
                updated_at: "2/1/2017",
                image_url: "https://thump-images.vice.com/images/articles/meta/2016/06/01/we-asked-the-hippies-of-lightning-in-a-bottle-what-it-means-to-be-a-hippie-1464803352.jpg?crop=0.9219194421506559xw:1xh;center,center&resize=1200:*",
            },
            {
                title: "My Second Doc",
                description: "Hey you hippies",
                file_url: "http://google.com",
                updated_at: "2/1/2017",
                image_url: "http://cdn.groovyhistory.com/content/34658/9f2faa7bf413a7746b7c2f7438485e6e.jpg",
            },
            {
                title: "My Last Doc",
                description: "Hey you hippies",
                file_url: "http://google.com",
                updated_at: "2/1/2017",
                image_url: "http://www.sikkensprize.org/wp-content/uploads/2017/03/Sikkensprize_HIPPIES-2-1-800x534-c-center.jpg",
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map