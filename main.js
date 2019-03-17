(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-formulario></app-formulario>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'projeto-formulario';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["FormularioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".corpo{\r\n    text-align: justify;\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    overflow-x: hidden;\r\n    margin-left: 10px;\r\n}\r\n\r\n.titulo{\r\n    position: relative;\r\n    left: 42%;\r\n}\r\n\r\n.biografia{\r\n    position: relative;\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n        \r\n    }\r\n\r\n.imagem img{\r\n    position: relative;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 100%;\r\n    left: 38%;\r\n    top: 10px;\r\n}\r\n\r\n.itens img{\r\n    max-width:60px;\r\n    max-height:30px;\r\n    width: auto;\r\n    height: auto;\r\n    align-items: center;\r\n    margin-left: 14px;\r\n    \r\n}\r\n\r\n.tituloA{\r\n    position: relative;\r\n    left: 40%;  \r\n    top: 60%;\r\n}\r\n\r\n.curso{\r\n    position: relative;\r\n    left: 40%;\r\n    top: 70%;\r\n}\r\n\r\n.disciplinas{\r\n    position: relative;\r\n    left: 40%;\r\n}\r\n\r\n.profissional{\r\n    position: absolute;\r\n    top: 88%;\r\n\r\n}\r\n\r\nfooter {\r\n    font-size: 20px;\r\n    text-align: center;    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Jwb3tcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDIlO1xyXG59XHJcbi5iaW9ncmFmaWF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4uaW1hZ2VtIGltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGxlZnQ6IDM4JTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG4uaXRlbnMgaW1ne1xyXG4gICAgbWF4LXdpZHRoOjYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgIFxyXG59XHJcblxyXG4udGl0dWxvQXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwJTsgIFxyXG4gICAgdG9wOiA2MCU7XHJcbn1cclxuXHJcbi5jdXJzb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHRvcDogNzAlO1xyXG59XHJcblxyXG4uZGlzY2lwbGluYXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5wcm9maXNzaW9uYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDg4JTtcclxuXHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulario/formulario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"pt-br\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Formulário</title>\n</head>\n\n<body class=\"corpo\">\n  <header class=\"cabecalho\">\n    <figure class=\"imagem\">\n      <img src=\"assets/eu.jpg\" alt=\"Paulo\" width=\"200\" height=\"200\">\n    </figure>\n    <figcaption class=\"titulo\">\n      <h2>Biografia</h2> \n    </figcaption>\n    <p class=\"biografia\">{{biografia}}</p>\n  </header>\n\n  <aside>\n    <div class=\"dados\">\n      <h3> Dados Pessoais</h3>\n      <ul id=\"lista\">\n          <li *ngFor=\"let dado of dados\">\n            {{dado.nasc}}  \n            {{dado.data}}\n        \n            {{dado.gen}}\n            {{dado.sexo}}\n          \n            {{dado.mail}}\n            {{dado.email}}\n        \n            {{dado.prof}}\n            {{dado.profissao}}\n      \n            {{dado.estado}}\n            {{dado.estado_civil}}\n          \n            {{dado.city}}\n            {{dado.cidade}}\n          </li>\n      </ul>\n    </div>\n</aside>\n<div class=\"itens\">\n  <a href=\"https://www.facebook.com/profile.php?id=100003898489518\" target=\"_blank\"><img src=\"assets/icon-facebook.png\" title=\"Facebook\"/></a>\n  \n  <a href=\"https://github.com/PauloSanches12?tab=repositories\" target=\"_blank\"><img src=\"assets/GitHub-Mark.png\"  title=\"GitHub\"/></a>\n</div>  \n\n  <div class=\"novo\">\n    <header class=\"tituloA\">\n      <h3><b>Informações Acadêmicas</b></h3>\n    </header>\n    <article>\n      <div class=\"curso\">\n        <p><b>Universidade:</b> {{uni}}</p>\n        <p><b>Curso: </b>{{curso}}</p>\n      </div>\n      <div class=\"disciplinas\">\n        <h3>Disciplinas 1º Periodo</h3>\n        <ul>\n          <li *ngFor='let disciplina of disciplinas1'>\n            {{disciplina}}\n          </li>\n        </ul>\n        \n        <h3>Disciplinas 2º Periodo</h3>\n          <ul id=\"parte2\">\n            <li *ngFor='let disciplina of disciplinas2'>\n              {{disciplina}}\n            </li>\n          </ul>\n        \n          <h3>Disciplinas 3º Perido</h3>\n          <ul>\n            <li *ngFor='let disciplina of disciplinas3'>\n              {{disciplina}}\n            </li>\n          </ul>\n\n          <h3>Disciplinas 4º Periodo</h3>\n          <ul>\n            <li *ngFor='let disciplina of disciplinas4'>\n              {{disciplina}}\n            </li>\n          </ul>\n        \n          <h3>Disciplinas 5º Periodo</h3>\n          <ul>\n            <li *ngFor='let disciplina of disciplinas5'>\n              {{disciplina}}\n            </li>\n          </ul>\n      </div>\n    </article>\n  </div>\n\n  <div class=\"profissional\">\n    <section>\n      <header>\n        <h3> Informações Profissionais</h3>\n      </header>\n\n      <article>\n        <p id=\"empresa\"><b>Empresa:</b> {{trabalho}}</p>\n        <p id=\"cargo\"><b>Cargo:</b> {{funcao}}</p>\n      </article>\n    </section>\n  </div>\n\n  <footer>\n    <h4>Palmas-TO <br> 2019</h4>\n  </footer>\n\n\n</body>"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormularioComponent = /** @class */ (function () {
    function FormularioComponent() {
        this.trabalho = [
            "CRP Itaipava"
        ];
        this.funcao = [
            "Auxiliar Administrativo"
        ];
        this.dados = [
            { nasc: "Nascimento:", data: "03/11/98" },
            { gen: "Gênero:", sexo: "Masculino" },
            { mail: "E-mail:", email: "paulo_sanches2012@hotmail.com" },
            { prof: "Profissão:", profissao: "Estudante" },
            { estado: "Estado Civil:", estado_civil: "Solteiro" },
            { city: "Cidade:", cidade: "Palmas-TO" }
        ];
        this.biografia = 'Meu nome é Paulo Sérgio Sanches dos Santos, nascido em Araguaína Tocantins, \
   no ano de 1998, filho de Lucimar Maria Alves dos Santos Cruz e Edmundo Sanches da Cruz, \
    com quem morei até meus 18 anos na cidade de Angico Tocantins, que foi quando eu terminei \
     meus estudos e decidir vir morar em Palmas, no ano de 2017 para cursar engenharia de software. \
      Onde estou atualmente no 5º Período com previsão de conclusão para 2020.';
        this.disciplinas1 = [
            'Algoritmos e Programação I',
            "Comunicação e Expressão",
            "Cultura Religiosa",
            "Fundamentos de Matemática",
            "Introdução a Computação",
        ];
        this.disciplinas2 = [
            "Algoritmos e Programação II",
            "Arquitetura e Organização de Computadores I",
            "Instrumentalização Cientifica",
            "Logica de Predicados",
            "Sociedade e Contemporaneidade",
        ];
        this.disciplinas3 = [
            "Banco de Dados I",
            "Engenharia de Software I",
            "Estruturas de Dados I",
            "Geometria Analitica e Álgebra Linear",
            "Linguagem de Programação Orientada a Objetos I",
        ];
        this.disciplinas4 = [
            "Banco de Dados II",
            "Empreendedorismo",
            "Engenharia de Software II",
            "Linguagem de Programação Comercial I",
            "Sistemas de Informação I",
        ];
        this.disciplinas5 = [
            'LP-WEB',
            'Teste de Software',
            'Sistema de Informação II',
            'Fundamentos de Sistema de Informação',
            'Modelagem de Sistemas de Informação'
        ];
        this.uni = [
            "CEULP-ULBRA"
        ];
        this.curso = [
            'Engenharia de Software'
        ];
    }
    FormularioComponent.prototype.ngOnInit = function () {
    };
    FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario',
            template: __webpack_require__(/*! ./formulario.component.html */ "./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormularioComponent);
    return FormularioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\paulo\Desktop\projeto-formulario\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map