$(document).ready(function(){

    var nombre, mail, consulta;
    
        $('#Generar-pdf').click(function(){

            nombre = $('#entrada-nombre').val().trim();
            if(nombre === "" ){
                alert("Por favor, ingrese su nombre");
                return;
            }
            mail = $('#entrada-mail').val().trim();
            if(mail === ""){
                alert("Por favor ingrese su mail")
                return;
            }

            consulta = $('#entrada-consulta').val();
            if(consulta === "")
                alert("Por favor ingrese un mensaje");
             return;
        });
        
        
        //Generamos el documento PDF con los datos que obtuvimos del formulario
        $('#Generar-pdf').click(function(){
        let doc = new jsPDF();

            doc.text(20,20,nombre);
            doc.text(20,30,mail);
            doc.text(20,40,consulta);
            doc.save('Test.pdf');
        })
    
        
});
