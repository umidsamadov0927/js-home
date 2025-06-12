// 1
// let users = document.querySelector("#users")
// let names = [
//     {
//         name: "Jordan",
//         age: 35,
//     },
//     {
//         name: "kamron",
//         age: 65,
//
//     },
//     {
//         name: "ahmad",
//         age: 11
//     }
// ]
// names.forEach(ism => {
//     let box = document.createElement("div");
//     box.innerHTML = `<p>${"Ismi: " + ism.name}</p> <p>${ "yoshi: " + ism.age}</p>`;
//     users.appendChild(box)
// })

// 2
// let div = document.querySelector("#product-list");
// let products = ["olma" , "banan" , "anor" , "gilos"]
// products.forEach(foreach_mevalar => {
//     let yangi = document.createElement("div");
//     yangi.innerHTML = `<li>${foreach_mevalar}</li>`;
//     div.appendChild(yangi);
// })

// 3
// let welcome = document.getElementById("welcome");
// let user = {
//     name: "odil",
//     age: 28,
//     isMember: true,
// }
// if(user.isMember){
//     document.getElementById("welcome").innerHTML = "Xush kelibsiz, Odil!"
// }

// // 4
// let div = document.getElementById("buttons");
// const colors = ["qizil", "yashil", "ko'k"];
// colors.forEach(btn_color => {
//     let yangi_div = document.createElement("button");
//     yangi_div.style.width = "50px"
//     yangi_div.style.height = "50px";
//     yangi_div.innerHTML = "bosing"
//     yangi_div.style.marginLeft = "10px";
//     yangi_div.addEventListener("click", () => {
//         alert(btn_color)
//     })
//     div.appendChild(yangi_div);
// })

// 6
// let div = document.getElementById("cards");
// let books = [
//     {title: "JavaScript Asoslari", author: "Hasan"},
//     {title: "React Darslari", author: "Ali"}
// ]
// books.forEach(book => {
//     let yangi_div = document.createElement("div");
//     yangi_div.innerHTML = `<p>${book.title}</p>  <p>${"Mualifi: " + book.author}</p>`;
//     div.appendChild(yangi_div)
// })

// 7
// let div = document.getElementById("product")
// let products = [
//     {name:"olma" , price:5000},
//     {name:"anor" , price:8000},
//     {name:"banan" , price:6000}
// ]
// products.forEach(product => {
//     let yangi_div = document.createElement("div")
//     yangi_div.innerHTML = `${product.name} - ${product.price + " mln so'm" }`
//     div.appendChild(yangi_div)
// })