window.onload = () => {
    const formLogin = document.forms.formLogin;

    const nombre = formLogin.nombre
    const contrasenia = formLogin.contrasenia;
    const repetirContrasenia = formLogin.repetirContrasenia;
    const email = formLogin.email;

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        // Aquí podemos mostrar el spinner para indicar a la persona que se
        // ha iniciado el proceso de registro
        mostrarSpinner();
        const nombreValido = validarNombre(nombre.value);
        const contraseniaValida = validarContrasenia(contrasenia.value, repetirContrasenia.value);
        const emailValido = validarEmail(email.value);

        if (nombreValido && contraseniaValida && emailValido) {
            const datosUsuario = new DatosUsuarios();
            datosUsuario.setFirstname(nombre.value);
            datosUsuario.setLastname('DH');
            datosUsuario.setEmail(email.value);
            datosUsuario.setPassword(contrasenia.value);

            const url = 'https://ctd-todo-api.herokuapp.com/v1'; // url base

            fetch(`${url}/users`, { // url + parte especifica
                method: 'POST', // Método requerido
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosUsuario) // Siempre texto, por eso se hace stringify
            }).then(datos => {
                return datos.json();
            }).then(datos => {
                localStorage.setItem("token", datos.jwt);
                location.href = './lista-tareas.html';
            }).catch(err => {
                console.log(err);
            });
        }

    });

    function validarNombre(valor) {
        const regex = new RegExp('[0-9]');

        const testTieneNumeros = regex.test(valor);
        const longitudCorrecta = valor.length > 2;

        return !testTieneNumeros && longitudCorrecta;
    }

    function validarContrasenia(contrasenia, repetirContrasenia) {
        const coincidentes = contrasenia === repetirContrasenia;
        const longitudCorrecta = contrasenia.length >= 8;
        const regex = /[A-Z]/;
        const testTieneMayuscula = regex.test(contrasenia);

        return coincidentes && longitudCorrecta && testTieneMayuscula;
    }

    function validarEmail(valor) {
        const regex = /[A-z]+[0-9]+@+[yahoo]+.[A-z]{3}/; // Agregar .ar => .(ar)?
        const emailDeYahoo = regex.test(valor);
        return !emailDeYahoo && valor !== null;
    }

}