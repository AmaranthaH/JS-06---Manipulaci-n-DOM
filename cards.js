/**
 * crear tarjeta
 * crear secciones p/tarjetas
 * img
 * nombre, descripccion, edad y la lista de algo
 * [] insertar en la tarjeta
 * [] mostrar dentro de div.container
*/

//cuando es necesario usar varibles globales es cuando se ponen en mayusculas, pero en general usar variables globales asi no es buena practica de java

//dato tambien con #
//dato por su clase .
const CARDS_CONTAINER = document.querySelector("#card-container");
const USER ={
    id:1,
    username:'User Name',
    desc:'sobre mi',
    age:26,
    fav_books:{
        books:[
            "Brida",
            "Ensayo sobre la ceguera",
            "mecanica del corazon", 
            "angenles y demodios",
            "el principito",
        ],
    },
};

//crear tarjeta
const card = document.createElement("div");
const name_section=document.createElement("h3");
const desc_section=document.createElement("p");
const age_section=document.createElement("p");
const book_section=document.createElement("div");
//lista----------------------------------------
const bookList= USER.fav_books.books.map((e) => {
    const item=document.createElement("ul");
    item.textContent=e;
    return item;
});

console.log(bookList);

//crear targeta
//inyectamos informacion
name_section.textContent=USER.username;
desc_section.textContent=USER.desc;
age_section.textContent=USER.age;
book_section.append(...bookList);
card.append(name_section,desc_section,age_section,book_section);

//inyecta targeta en el container
CARDS_CONTAINER.appendChild(card);