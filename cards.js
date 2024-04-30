const CARDS_CONTAINER = document.querySelector("#card-container");

// Función para crear una tarjeta de usuario
function createUserCard(user) {
    var card = document.createElement("div");
    var name_section = document.createElement("h3");
    var desc_section = document.createElement("p");
    var age_section = document.createElement("p");
    var book_section = document.createElement("div");

    // Lista de libros
    var bookList = user.fav_books.books.map((libro) => {
        var item = document.createElement("ul");
        item.textContent = libro;
        return item;
    });

    // Inyectar información del usuario
    name_section.textContent = user.username;
    desc_section.textContent = user.desc;
    age_section.textContent = "Edad: " + user.age;
    book_section.append(...bookList);

    // Añadir secciones a la tarjeta
    card.append(name_section, desc_section, age_section, book_section);

    // Añadir tarjeta al contenedor
    CARDS_CONTAINER.appendChild(card);
}

// Datos de usuarios
const users = [
    {
        id: 1,
        username: 'User Name 1',
        desc: 'Descripción del usuario 1',
        age: 26,
        fav_books: {
            books: [
                "Brida",
                "Ensayo sobre la ceguera",
                "Mecanica del corazon",
                "Ángeles y demonios",
                "El principito",
            ],
        },
    },
    {
        id: 2,
        username: 'User Name 2',
        desc: 'Descripción del usuario 2',
        age: 30,
        fav_books: {
            books: [
                "Harry Potter",
                "Cien años de soledad",
                "El señor de los anillos",
            ],
        },
    }
];

// Mostrar y crear tarjetas para cada usuario
users.forEach((user) => {
    createUserCard(user);
});
