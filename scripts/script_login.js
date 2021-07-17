window.onload = () => {
    const form = document.forms.formLogin;
    
    form.addEventListener("submit", e => { // submit a form, no a boton
        e.preventDefault();
        
        const email = form.email.value;
        const password = form.password.value;
        
        const url = 'https://ctd-todo-api.herokuapp.com/v1'; // url base
            fetch(`${url}/users/login`, { // url + parte especifica
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, //no es necesario agregar la key si el nombre es = al de la variable
                    password
                })
            }).then(datos => {
                console.log(datos);
                return datos.json();
            }).then(datos => {
                console.log(datos);
                localStorage.setItem("token", datos.jwt);
                location.href = './lista-tareas.html';
            }).catch(err => {
                console.log(err);
            });
    })
}

// login 
// email: tatyluna74@gmail.com
// password: Taty4248