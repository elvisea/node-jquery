$(function () {
    $('button').on('click', async function () {
        const usuarios = await $.ajax({ url: 'http://localhost:8080/api/home/' })

        console.log("usuarios =>", usuarios);

        usuarios.map(user => {
            $("main").append(`<span>Name: ${user.name} Age: ${user.age} City: ${user.city}</span><br />`)
        });
    })
})