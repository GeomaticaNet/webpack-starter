import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

// hay que poner export para que el import del que lo llame funcione...
export const saludar = ( nombre = 'sin nombre' ) =>{

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!`;

    document.body.append(h1);

    // img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);

}