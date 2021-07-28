module.exports = {
    async index(request, response) {

        const users = [
            {
                name: "Fulano",
                age: 50,
                city: "Curitiba",
                state: "PR"
            },
            {
                name: "Ciclano",
                age: 30,
                city: "Sao Paulo",
                state: "PR"
            }
        ]

        console.log("Home Controller USERS => => =>", users);
        response.render("pages/index", { usuarios: users });
    }
}