(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"+J/u":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Textarea with specified rows\'</span>,\n        placeholder: <span class="hljs-string">\'This has 10 rows\'</span>,\n        rows: <span class="hljs-number">10</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"0KMO":function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n})\nexport class AppModule {}\n"},IW1M:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Textarea with specified rows',\n        placeholder: 'This has 10 rows',\n        rows: 10,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},"Xy++":function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},kX75:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],\n  declarations: [AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},pXog:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},wVWA:function(n,s,a){"use strict";a.r(s);var o=a("Mlb/"),l=a("QZuW");class p{constructor(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"textarea",templateOptions:{label:"Textarea with specified rows",placeholder:"This has 10 rows",rows:10}}]}submit(){alert(JSON.stringify(this.model))}}const t={examples:[{title:"Table Rows",description:"\n              With angular-formly-bootstrap-templates, you can specify\n                <code>rows</code> for the\n                <code>textarea</code> type. You can also specify\n                <code>cols</code> but that doesn't matter because the\n                <code>.form-control</code> class will make the textarea have a width of 100% anyway.\n            ",component:p,files:[{file:"app.component.html",content:a("pXog"),filecontent:a("Xy++")},{file:"app.component.ts",content:a("+J/u"),filecontent:a("IW1M")},{file:"app.module.ts",content:a("kX75"),filecontent:a("0KMO")}]}]};class e{}var r=a("n91+"),m=a("aUi8"),i=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),f=a("rGUg"),g=a("qEw3"),h=a("KL5v"),y=a("WPgD"),j=a("wR1y"),b=a("fYis"),w=a("mSm0"),v=a("g/x9"),F=a("Ea/l"),k=a("kY9M"),C=a("cXvR"),x=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var l=!0,p=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==p.submit()&&l),l}),null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,v.b,v.a)),o["\u0275prd"](512,null,F.a,F.a,[k.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275did"](7,966656,null,0,C.a,[F.a,k.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)}))}function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,x)),o["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var R=o["\u0275ccf"]("formly-app-example",p,_,{},{},[]),S=a("vk2e"),N=a("o3+a"),O=a("9b0e"),T=a("6YJn"),G=a("dvHj"),A=a("C0xW"),L=a("W9sv"),W=a("m6lo"),J=a("S6Ld"),U=a("cTZo"),X=a("Kfqh"),D=a("Ienz"),I=a("KuLc"),K=a("Z7++"),P=a("2lML"),B=a("pgVP"),V=a("pk7F"),Y=a("T8+l"),q=a("0hby"),z=a("tVba"),E=a("XX7/"),Z=a("pLrJ"),H=a("U5/R"),Q=a("TqxR"),$=a("soK0"),nn=a("1k+g"),sn=a("pAed"),an=a("VtvF"),on=a("lN7U"),ln=a("NPi3"),pn=a("PCNd"),tn=a("WCiw"),en=a("Vtge"),rn=a("+5Wd"),mn=a("+R4m"),dn=a("SSYk"),cn=a("KJU8"),un=a("eTA3"),fn=a("o12O"),gn=a("iWYX"),hn=a("h18T");class yn{}var jn=a("qk26"),bn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return wn}));var wn=o["\u0275cmf"](e,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,f.a,g.a,h.a,y.a,j.a,b.a,w.a,R]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[o.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,N.c,N.c,[]),o["\u0275mpd"](4608,O.d,O.d,[O.j,O.f,o.ComponentFactoryResolver,O.i,O.g,o.Injector,o.NgZone,S.DOCUMENT,T.b,[2,S.Location]]),o["\u0275mpd"](5120,O.k,O.l,[O.d]),o["\u0275mpd"](5120,G.b,G.c,[O.d]),o["\u0275mpd"](4608,A.e,L.c,[[2,L.g],[2,L.l]]),o["\u0275mpd"](5120,W.c,W.j,[O.d]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,U.a,U.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,F.a,F.a,[k.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),o["\u0275mpd"](1073742336,X.b,X.b,[]),o["\u0275mpd"](1073742336,N.d,N.d,[]),o["\u0275mpd"](1073742336,D.a,D.a,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,I.g,I.g,[]),o["\u0275mpd"](1073742336,K.ScrollingModule,K.ScrollingModule,[]),o["\u0275mpd"](1073742336,O.h,O.h,[]),o["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,A.f]]),o["\u0275mpd"](1073742336,G.e,G.e,[]),o["\u0275mpd"](1073742336,L.v,L.v,[]),o["\u0275mpd"](1073742336,P.j,P.j,[]),o["\u0275mpd"](1073742336,W.i,W.i,[]),o["\u0275mpd"](1073742336,W.f,W.f,[]),o["\u0275mpd"](1073742336,B.c,B.c,[]),o["\u0275mpd"](1073742336,V.c,V.c,[]),o["\u0275mpd"](1073742336,Y.b,Y.b,[]),o["\u0275mpd"](512,k.b,k.b,[]),o["\u0275mpd"](1024,k.a,(function(n){return[{wrappers:[{name:"form-field",component:q.a}]},{types:[{name:"input",component:z.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:E.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"select",component:$.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:nn.a}],extensions:[{name:"addons",extension:{postPopulate:sn.a}}]},an.b(n),{}]}),[k.b]),o["\u0275mpd"](1073742336,an.a,an.a,[k.b,[2,k.a]]),o["\u0275mpd"](1073742336,on.h,on.h,[]),o["\u0275mpd"](1073742336,ln.b,ln.b,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,yn,yn,[]),o["\u0275mpd"](1073742336,jn.t,jn.t,[[2,jn.y],[2,jn.p]]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,jn.n,(function(){return[[{path:"",component:bn.a,data:t}]]}),[])])}))}}]);