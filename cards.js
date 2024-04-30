const CARDS_CONTAINER = document.querySelector("#card-container");

// Datos de usuarios
const users = [
    {
        id: 1,
        username: 'Usuario 1',
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
        username: 'Usuario 2',
        desc: 'Descripción del usuario 2',
        age: 30,
        fav_books: {
            books: [
                "Harry Potter",
                "Cien años de soledad",
                "El señor de los anillos",
            ],
        },
    },
    {
        id: 3,
        username: 'Usuario 3',
        desc: 'Descripción del usuario 3',
        age: 16,
        fav_books: {
            books: [
                "Carry On",
                "One One",
                "Mr. Sr.",
            ],
        },
    }
];

// Función para crear una tarjeta de usuario
function cartaDeUsuario(user) {
    var card = document.createElement("div");
    var name_section = document.createElement("h3");
    var desc_section = document.createElement("p");
    var age_section = document.createElement("p");
    var book_section = document.createElement("div");

    // Lista de libros
    var bookList = user.fav_books.books.map((e) => {
        var item = document.createElement("ul");
        item.textContent = e;
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

// Mostrar y crear tarjetas para cada usuario
users.forEach((user) => {
    cartaDeUsuario(user);
});
