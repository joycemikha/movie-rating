import './polyfills.server.mjs';
import{A as P,B as I,C as S,D as O,G as E,M as F,a as v,b as g,c,d as u,e as m,f as x,g as h,h as C,i as y,j as b,k as n,l as r,m as s,n as M,o as a,p as d,q as _,r as l,y as w}from"./chunk-DRAD72YZ.mjs";var D=(()=>{let t=class t{constructor(i){this._http=i}getPosts(){return this._http.get("https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940")}};t.\u0275fac=function(o){return new(o||t)(g(P))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function B(e,t){if(e&1&&(n(0,"div",5),s(1,"img",6),n(2,"div",7)(3,"h5",8),a(4),r(),n(5,"p",9),a(6),r(),n(7,"p",9)(8,"strong"),a(9,"Release Date: "),r(),a(10),r(),n(11,"p",9)(12,"strong"),a(13,"Rating:"),r(),a(14),s(15,"i",10),r()()()),e&2){let p=t.$implicit,i=M();m(),h("src",i.imgPath+p.poster_path,u),m(3),d(p.title||p.name),m(2),d(p.overview),m(4),d(p.release_date||p.first_air_date),m(4),_(" ",p.vote_average,"/10 ")}}var j=(()=>{let t=class t{constructor(i){this._movie=i,this.imgPath="https://image.tmdb.org/t/p/w500"}ngOnInit(){this._movie.getPosts().subscribe(i=>{this.homeMovies=i.results})}};t.\u0275fac=function(o){return new(o||t)(x(D))},t.\u0275cmp=c({type:t,selectors:[["app-home"]],standalone:!0,features:[l],decls:8,vars:0,consts:[[1,"bg-dark","bg-opacity-75"],[1,"fw-bolder","fs-2","py-3","px-5","text-bg-warning"],[1,"fa-solid","fa-film"],[1,"container","d-flex"],[1,"row"],[1,"card","card-movie","bg-dark","text-white"],["alt","Movie Poster",1,"w-100","pt-3","card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"fa-solid","fa-star",2,"color","#FFD43B"]],template:function(o,f){o&1&&(n(0,"div",0)(1,"p",1),s(2,"i",2),a(3," Top movies on this week :"),r(),n(4,"div",3)(5,"div",4),y(6,B,16,5,"div",5,C),r()()()),o&2&&(m(6),b(f.homeMovies))},styles:[".card-movie[_ngcontent-%COMP%]{max-width:400px;margin:20px auto}.card-movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover}.card-movie[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem}.card-movie[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{font-size:1rem}"]});let e=t;return e})();var H=(()=>{let t=class t{constructor(){this.title="app2"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:1,vars:0,template:function(o,f){o&1&&s(0,"app-home")},dependencies:[j]});let e=t;return e})();var R=[];var T={providers:[F(R),O(),I()]};var U={providers:[E()]},z=w(T,U);var $=()=>S(H,z),nt=$;export{nt as a};
