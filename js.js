function alerta() {
    var Encendido = 0;
    if (Encendido >= 1) {
        Swal.fire({
            icon: 'success',
            title: 'Estado',
            text: 'Se encuentra encendido',
        })
    }