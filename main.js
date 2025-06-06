// 1
// function talaba (ism,familiya,yosh,kurs,universitit) {
//     this.name = ism
//     this.family = familiya
//     this.yosh = yosh
//     this.kurs = kurs
//     this.universitit = universitit
// }
// let malumot = new talaba("umid","samadov",18,1,"tatu")
// console.log(malumot)

// 2
// function kvadrat (tomoni) {
//     this.tomoni1 = tomoni
// }
// kvadrat.prototype.peremetr = function () {
//     return 4 * this.tomoni1;
// }
// kvadrat.prototype.yuzasi = function () {
//     return this.tomoni1 * this.tomoni1
// }
// let tomonlari = new kvadrat(8);
// console.log("peremeti: " + tomonlari.peremetr());
// console.log("yuzasi: " + tomonlari.yuzasi());

// 3
// function talaba (ism,familiya,yosh,kurs,universitit) {
//     this.name = ism
//     this.family = familiya
//     this.yosh = yosh
//     this.kurs = kurs
//     this.universitit = universitit
// }
// talaba.prototype.getInfo = function (){
//     console.log("Salom mening ismim " + this.name + " familiyam " + this.family + " yoshim " + this.yosh + " da men hozirda " + this.universitit + " da uqiyman va men " + this.kurs + " chi kurs man")
// }
// let talabaDate = new talaba("Shahriyor","Zafarov",19,2,"TATU")
// talabaDate.getInfo()

// 4
// Array.prototype.a = function () {
//     return this[this.length - 1];
// }
// let b = [1,2,3,4,5];
// console.log(b.a())

// 5
// function boshHarf (suz) {
//     return suz[0].toUpperCase() + suz.slice(1);
// }
//
// console.log(boshHarf(prompt("so'z kiriting")));

// 6
// function User (age) {
//     this.age = age;
// }
// User.prototype.isAdult = function () {
//     return this.age >= 18
// }
// let user2 = new User(prompt("Yoshinggizni kiriting"));
// alert(user2.isAdult());