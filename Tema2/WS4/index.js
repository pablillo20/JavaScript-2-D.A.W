// Ejercicio 1
window.onload = function() {
    // Información del navegador
    let datosNavegador = [
        { descripcion: 'Nombre del navegador', valor: navigator.appName },
        { descripcion: 'Versión del navegador', valor: navigator.appVersion },
        { descripcion: 'Agente de usuario', valor: navigator.userAgent },
        { descripcion: 'Plataforma', valor: navigator.platform },
        { descripcion: 'Cookies habilitadas', valor: navigator.cookieEnabled },
        { descripcion: 'Idioma', valor: navigator.language },
        { descripcion: 'Online', valor: navigator.onLine },
        { descripcion: 'Java habilitado', valor: navigator.javaEnabled() },
        { descripcion: 'Tamaño de pantalla', valor: `${screen.width} x ${screen.height}` },
        { descripcion: 'Ancho disponible', valor: screen.availWidth },
        { descripcion: 'Alto disponible', valor: screen.availHeight },
        { descripcion: 'Profundidad de color', valor: screen.colorDepth },
        { descripcion: 'Resolución de pixeles', valor: screen.pixelDepth },
        { descripcion: 'URL actual', valor: window.location.href },
        { descripcion: 'Protocolo de la URL', valor: window.location.protocol },
        { descripcion: 'Dominio', valor: window.location.hostname },
        { descripcion: 'Puerto', valor: window.location.port || 'Ninguno' }
    ];

    document.write('<table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">');
    document.write('<tr><th>Descripción</th><th>Valor</th></tr>');

    datosNavegador.forEach(dato => {
        document.write(`<tr><td>${dato.descripcion}</td><td>${dato.valor}</td></tr>`);
    });

    document.write('</table>');
};


// Ejercicio 2 

window.onload = function() {
    // Información del cliente (navegador y dispositivo)
    let datosCliente = [
        { descripcion: 'Nombre del navegador', valor: navigator.appName },
        { descripcion: 'Versión del navegador', valor: navigator.appVersion },
        { descripcion: 'Agente de usuario', valor: navigator.userAgent },
        { descripcion: 'Plataforma del dispositivo', valor: navigator.platform },
        { descripcion: 'Cookies habilitadas', valor: navigator.cookieEnabled },
        { descripcion: 'Idioma del navegador', valor: navigator.language },
        { descripcion: 'Estado de conexión', valor: navigator.onLine ? 'En línea' : 'Desconectado' },
        { descripcion: 'Java habilitado', valor: navigator.javaEnabled() },
        { descripcion: 'Ancho de pantalla', valor: screen.width + ' px' },
        { descripcion: 'Alto de pantalla', valor: screen.height + ' px' },
        { descripcion: 'Ancho disponible', valor: screen.availWidth + ' px' },
        { descripcion: 'Alto disponible', valor: screen.availHeight + ' px' },
        { descripcion: 'Profundidad de color', valor: screen.colorDepth + ' bits' },
        { descripcion: 'Resolución de píxeles', valor: screen.pixelDepth + ' bits' },
        { descripcion: 'URL actual', valor: window.location.href },
        { descripcion: 'Protocolo de la URL', valor: window.location.protocol },
        { descripcion: 'Dominio', valor: window.location.hostname },
        { descripcion: 'Puerto de conexión', valor: window.location.port || 'Ninguno' }
    ];

    document.write('<table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">');
    document.write('<tr><th>Descripción</th><th>Valor</th></tr>');

    datosCliente.forEach(dato => {
        document.write(`<tr><td>${dato.descripcion}</td><td>${dato.valor}</td></tr>`);
    });

    document.write('</table>');
};
