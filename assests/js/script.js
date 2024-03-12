var traumatologia = [
    { hora: "08:00", especialista: "ANDREA ZUÑIGA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:30", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
];

var radiologia = [
    { hora: "09:00", especialista: "EDUARDO VIÑUELA", paciente: "RAUL MARTINEZ", rut: "17665461-4", prevision: "FONASA" },
    { hora: "09:30", especialista: "CARMEN ISLA", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "10:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-5", prevision: "FONASA" },
    { hora: "10:30", especialista: "FRANCISCO VON TEUBER", paciente: "BRUNO VILLALOBOS", rut: "12998484-5", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "EDUARDO VIÑUELA", paciente: "ANA SEPULVEDA", rut: "14589312-9", prevision: "ISAPRE" }
];

var dental = [
    { hora: "08:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    { hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    { hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    { hora: "14:00", especialista: "RAUL ARAYA", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" }
];


traumatologia.push(
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
);

radiologia.shift();
radiologia.pop();

document.write("<div class='container'><h2>Consultas Médicas de Dental</h2>");
document.write("<table class='table'><thead class='thead-light'><tr><th scope='col'>Hora</th><th scope='col'>Especialista</th><th scope='col'>Paciente</th><th scope='col'>Rut</th><th scope='col'>Previsión</th></tr></thead><tbody>");
dental.forEach(function(consulta) {
    document.write("<tr><td>" + consulta.hora + "</td><td>" + consulta.especialista + "</td><td>" + consulta.paciente + "</td><td>" + consulta.rut + "</td><td>" + consulta.prevision + "</td></tr>");
});
document.write("</tbody></table></div>");

document.write("<div class='container'><h2>Listado Total de Pacientes</h2>");
document.write("<table class='table'><thead class='thead-light'><tr><th scope='col'>Paciente</th></tr></thead><tbody>");
var pacientesTotales = traumatologia.concat(radiologia, dental).map(function(consulta) {
    return consulta.paciente;
});
pacientesTotales.forEach(function(paciente) {
    document.write("<tr><td>" + paciente + "</td></tr>");
});
document.write("</tbody></table></div>");

document.write("<div class='container'><h2>Pacientes de Dental con Previsión ISAPRE</h2>");
document.write("<table class='table'><thead class='thead-light'><tr><th scope='col'>Paciente</th><th scope='col'>Previsión</th></tr></thead><tbody>");
var pacientesDentalISAPRE = dental.filter(function(consulta) {
    return consulta.prevision === "ISAPRE";
});
pacientesDentalISAPRE.forEach(function(consulta) {
    document.write("<tr><td>" + consulta.paciente + "</td><td>" + consulta.prevision + "</td></tr>");
});
document.write("</tbody></table></div>");

document.write("<div class='container'><h2>Pacientes de Traumatología con Previsión FONASA</h2>");
document.write("<table class='table'><thead class='thead-light'><tr><th scope='col'>Paciente</th><th scope='col'>Previsión</th></tr></thead><tbody>");
var pacientesTraumatologiaFONASA = traumatologia.filter(function(consulta) {
    return consulta.prevision === "FONASA";
});
pacientesTraumatologiaFONASA.forEach(function(consulta) {
    document.write("<tr><td>" + consulta.paciente + "</td><td>" + consulta.prevision + "</td></tr>");
});
document.write("</tbody></table></div>");