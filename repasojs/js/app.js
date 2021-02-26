//Promises en Ajax

const DescargarUsuarios = (cantidad) =>
    new Promise((resolve, reject) => {
        const api = `https://randomuser.me/api?results=${cantidad}&nat=us`;

        //llamada a api

        const xhr = new XMLHttpRequest();

        xhr.open("GET", api, true);

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText).results);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        xhr.onerror = (error) => reject(error);
        xhr.send();
    });

DescargarUsuarios(20).then(
    (miembros) => imprimitHTML(miembros),
    (error) => console.error(new Error("Hubo un error:" + error))
);


function imprimitHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `<li>
            Nombre: ${usuario.name.first} ${usuario.name.last}
            Pais: ${usuario.nat} 
            Imagen:
                    <img src="${usuario.picture.medium}"/>
            </li>`;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}