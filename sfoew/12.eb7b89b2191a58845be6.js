(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VnT2:function(t,c,e){"use strict";e.r(c),e.d(c,"PatientFormsModule",(function(){return v}));var o=e("ofXK"),i=e("tyNb"),a=e("mrSG"),r=e("fXoL"),n=e("4/Mx"),d=e("DTUD"),s=e("DJUr"),l=e("0+vP");function b(t,c){1&t&&(r.ac(0,"div",9),r.ac(1,"div",10),r.ac(2,"span",11),r.Mc(3,"Loading..."),r.Zb(),r.Zb(),r.Zb())}function m(t,c){if(1&t){const t=r.bc();r.ac(0,"tbody"),r.ac(1,"tr",27),r.hc("click",(function(){r.Bc(t);const e=c.$implicit,o=r.lc().$implicit;return r.lc().openFormDetails(e.form._id,o.doctors._id)})),r.ac(2,"td",28),r.Mc(3),r.Zb(),r.ac(4,"td",12),r.Mc(5),r.Zb(),r.Zb(),r.Zb()}if(2&t){const t=c.$implicit;r.Jb(3),r.Nc(t.form.title),r.Jb(2),r.Nc(t.form.description)}}function h(t,c){if(1&t){const t=r.bc();r.ac(0,"tbody",27),r.hc("click",(function(){r.Bc(t);const e=c.$implicit;return r.lc(2).previewForm(e)})),r.ac(1,"tr"),r.ac(2,"td",28),r.Mc(3),r.Zb(),r.ac(4,"td",12),r.Mc(5),r.Zb(),r.Zb(),r.Zb()}if(2&t){const t=c.$implicit;r.Jb(3),r.Nc(t.form.title),r.Jb(2),r.Nc(t.form.description)}}function p(t,c){if(1&t){const t=r.bc();r.ac(0,"tbody"),r.ac(1,"tr"),r.ac(2,"td",12),r.Mc(3),r.Zb(),r.ac(4,"td",12),r.Mc(5),r.Zb(),r.ac(6,"td",12),r.Mc(7),r.Zb(),r.ac(8,"td",12),r.Mc(9),r.Zb(),r.ac(10,"td"),r.ac(11,"i",13),r.hc("click",(function(){r.Bc(t);const e=c.$implicit;return r.lc().GetForms(e.doctors._id)})),r.Zb(),r.ac(12,"i",14),r.hc("click",(function(){r.Bc(t);const e=c.$implicit;return r.lc().GetForms(e.doctors._id)})),r.Zb(),r.Zb(),r.Zb(),r.ac(13,"div",15),r.ac(14,"div",16),r.ac(15,"div",17),r.ac(16,"div",18),r.ac(17,"button",19),r.ac(18,"span",20),r.Mc(19,"\xd7"),r.Zb(),r.Zb(),r.ac(20,"h5",21),r.Mc(21),r.Zb(),r.ac(22,"div",22),r.ac(23,"div",23),r.ac(24,"table",4),r.ac(25,"thead"),r.ac(26,"tr"),r.ac(27,"th",6),r.Mc(28,"Title"),r.Zb(),r.ac(29,"th",6),r.Mc(30,"Description"),r.Zb(),r.Zb(),r.Zb(),r.Kc(31,m,6,2,"tbody",7),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.ac(32,"div",24),r.ac(33,"div",16),r.ac(34,"div",17),r.ac(35,"div",18),r.ac(36,"button",19),r.ac(37,"span",20),r.Mc(38,"\xd7"),r.Zb(),r.Zb(),r.ac(39,"h5",21),r.Mc(40),r.Zb(),r.ac(41,"div",22),r.ac(42,"div",23),r.ac(43,"table",4),r.ac(44,"thead"),r.ac(45,"tr"),r.ac(46,"th",6),r.Mc(47,"Title"),r.Zb(),r.ac(48,"th",6),r.Mc(49,"Description"),r.Zb(),r.Zb(),r.Zb(),r.Kc(50,h,6,2,"tbody",25),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.Vb(51,"div",26),r.Zb(),r.Zb(),r.Zb(),r.Zb()}if(2&t){const t=c.$implicit,e=r.lc();r.Jb(3),r.Pc("",t.doctors.name," ",t.doctors.lastname,""),r.Jb(2),r.Nc(t.doctors.adresse),r.Jb(2),r.Nc(t.doctors.email),r.Jb(2),r.Oc("",t.doctors.tel," "),r.Jb(12),r.Oc("Formulaires affecter par ",t.doctors.lastname,""),r.Jb(10),r.rc("ngForOf",e.forms),r.Jb(9),r.Oc("Formulaires remplis par ",t.doctors.lastname,""),r.Jb(10),r.rc("ngForOf",e.formsCompleted)}}function f(t,c){1&t&&(r.ac(0,"div",29),r.ac(1,"h1",30),r.Mc(2,"A"),r.Zb(),r.ac(3,"h1",31),r.Mc(4,"AUCUN CONTACT "),r.Zb(),r.Zb())}const u=[{path:"",component:(()=>{class t{constructor(t,c,e,o,i){this.router=t,this.data=c,this.doctorsService=e,this.authPat=o,this.PatForms=i,this.ProfId="",this.mesgEmpty=!1,this.mesgEmpty=!1,this.id=this.authPat.geid(),this.doctorsService.myContacts(this.id).subscribe(t=>{this.profs=t,this.filtredprofs=t,this.mesgEmpty=!0})}ngOnInit(){this.data.currentMessage.subscribe(t=>this.idForm=t),this.data.currentindex.subscribe(t=>this.index=t)}DoctorId(t){this.ProfId=t}filterItem(t){this.profs=this.filtredprofs.filter(c=>c.doctors.name.toLowerCase().includes(t.toLowerCase())||c.doctors.lastname.toLowerCase().includes(t.toLowerCase()))}GetForms(t){this.idDocter=t,this.PatForms.getForms(this.id,t).subscribe(t=>{this.forms=t.incompleted,this.formsCompleted=t.completed})}openFormDetails(t,c){return Object(a.a)(this,void 0,void 0,(function*(){this.idForm=t,yield this.router.navigate(["patient/forms-details",t,this.idDocter,this.id]),this.data.GetId(t),window.location.reload()}))}previewForm(t){return Object(a.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["patient/preview-details",t.form._id,this.idDocter,this.id]),window.location.reload()}))}}return t.\u0275fac=function(c){return new(c||t)(r.Ub(i.b),r.Ub(n.a),r.Ub(d.a),r.Ub(s.a),r.Ub(l.a))},t.\u0275cmp=r.Ob({type:t,selectors:[["app-patient-forms"]],decls:24,vars:3,consts:[[1,"container"],[1,"form-group"],[1,"h2","font-weight-bold",2,"color","#153d77"],["type","text","placeholder","Chercher...",1,"form-control",3,"input"],[1,"table"],["class","text-center",4,"ngIf"],["scope","col"],[4,"ngFor","ngForOf"],["class","text-center mt-5","style","width: 100%;height: 100%;padding-bottom: 15%;",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"pt-3"],["aria-hidden","true","data-toggle","modal","data-target","#exampleModal",1,"fa-sharp","fa-solid","fa-check-to-slot",2,"padding-right","10px","cursor","pointer",3,"click"],["aria-hidden","true","data-toggle","modal","data-target","#exampleModalCompleted",1,"fas","fa-file-medical",2,"cursor","pointer",3,"click"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],["id","exampleModalLabel",1,"modal-title"],[1,"container","rounded","mt-2","bg-white","p-md-2"],[1,"table-responsive"],["id","exampleModalCompleted","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"modal-footer"],[2,"cursor","pointer",3,"click"],["data-dismiss","modal",1,"pt-3"],[1,"text-center","mt-5",2,"width","100%","height","100%","padding-bottom","15%"],[1,"header-title",2,"color","transparent","padding-bottom","15%","font-size","0px"],[1,"header-title",2,"color","red","padding-bottom","15%"]],template:function(t,c){1&t&&(r.ac(0,"div",0),r.ac(1,"div",1),r.ac(2,"div",2),r.Mc(3,"Liste des contacts"),r.Zb(),r.Zb(),r.ac(4,"div",0),r.ac(5,"div",0),r.ac(6,"div",1),r.ac(7,"input",3),r.hc("input",(function(t){return c.filterItem(t.target.value)})),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.ac(8,"table",4),r.Kc(9,b,4,0,"div",5),r.ac(10,"thead"),r.ac(11,"tr"),r.ac(12,"th",6),r.Mc(13,"Nom et pr\xe9nom "),r.Zb(),r.ac(14,"th",6),r.Mc(15,"Adresse"),r.Zb(),r.ac(16,"th",6),r.Mc(17,"E-mail"),r.Zb(),r.ac(18,"th",6),r.Mc(19,"T\xe9l\xe8phone"),r.Zb(),r.ac(20,"th",6),r.Mc(21,"Etat Formulaire"),r.Zb(),r.Zb(),r.Zb(),r.Kc(22,p,52,9,"tbody",7),r.Zb(),r.Zb(),r.Kc(23,f,5,0,"div",8)),2&t&&(r.Jb(9),r.rc("ngIf",!c.profs),r.Jb(13),r.rc("ngForOf",c.profs),r.Jb(1),r.rc("ngIf",0==c.profs))},directives:[o.m,o.l],styles:["table[_ngcontent-%COMP%]{color:#414040}.modal-dialog[_ngcontent-%COMP%]{max-width:900px;height:500px}table.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover   th[_ngcontent-%COMP%]{background-color:#bacfe5!important}img[_ngcontent-%COMP%]{width:40px;height:40px}img.details[_ngcontent-%COMP%]{width:30%;height:30%}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275mod=r.Sb({type:t}),t.\u0275inj=r.Rb({factory:function(c){return new(c||t)},imports:[[i.d.forChild(u)],i.d]}),t})();var g=e("3Pt+"),M=e("cZdB");let v=(()=>{class t{}return t.\u0275mod=r.Sb({type:t}),t.\u0275inj=r.Rb({factory:function(c){return new(c||t)},imports:[[o.c,Z,g.j,M.a]]}),t})()}}]);