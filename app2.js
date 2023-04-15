function genPDF(){
    let doc = new jsPDF();
    let entradaNombre = document.getElementById('entrada-nombre').value; 
    let entradaMail = document.getElementById('entrada-mail').value; 
    let entradaConsulta = document.getElementById('entrada-consulta').value; 
    doc.text(20,20,entradaNombre);
    doc.text(20,30,entradaMail);
    doc.text(20,40,entradaConsulta);
    doc.save('Test.pdf');
}