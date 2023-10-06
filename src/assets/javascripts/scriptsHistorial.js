$(document).ready(function(){
    changeActiveNavLink("nav-link-historial");
    $('#list-ficheros').DataTable( {
        language: {
            url: './translations/dataTables.spanish.json'
        }
    } );
});