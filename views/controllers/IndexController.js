module.exports = {
    async index(request, response) {

        const usuarios = [
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

        console.log("Index Controller USUARIOS =>", usuarios);
        response.json(usuarios)
    }
}