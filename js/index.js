

function start () {
    var buttonSave = document.getElementById('Salvar');
    buttonSave.onclick = function(){
        saveLocalStorage();
    }
  };

    var buttonCancel = document.getElementById('Cancelar');
    buttonCancel.onclick = function() { 
        cancel();
     };

     function saveLocalStorage(){
         var q1m = document.getElementById('checkbox1');
         var q2m = document.getElementById('checkbox2');
         var q3m = document.getElementById('checkbox3');

         var q1h = document.getElementById('checkbox4');
         var q2h = document.getElementById('checkbox5');
         var q3h = document.getElementById('checkbox6');
         
         var q1g = document.getElementById('checkbox7');
         var q2g = document.getElementById('checkbox8');
         var q3g = document.getElementById('checkbox9');

         if(confirm ("Deseja enviar dados?") == true){
             localStorage.setItem('checkbox1_' + idcheckbox1.tostring(),inputonclick.value);
             localStorage.setItem('checkbox2_' + idcheckbox2.tostring(),inputonclick.value);
             localStorage.setItem('checkbox3_' + idcheckbox3.tostring(),inputonclick.value);
        
             localStorage.setItem('checkbox4_' + idcheckbox1.tostring(),inputonclick.value);
             localStorage.setItem('checkbox5_' + idcheckbox2.tostring(),inputonclick.value);
             localStorage.setItem('checkbox6_' + idcheckbox3.tostring(),inputonclick.value);
 
             localStorage.setItem('checkbox7_' + idcheckbox1.tostring(),inputonclick.value);
             localStorage.setItem('checkbox8_' + idcheckbox2.tostring(),inputonclick.value);
             localStorage.setItem('checkbox9_' + idcheckbox3.tostring(),inputonclick.value);

             alert("Dados salvos com sucesso.");

             checkbox1++;
             checkbox2++;
             checkbox3++;
             checkbox4++;
             checkbox5++;
             checkbox6++;
             checkbox7++;
             checkbox8++;
             checkbox9++;
         }
     };

     function cancel() {
        if (confirm("Deseja cancelar?") == true) {
            alert("Operação cancelada.");
            clearFields();
        }
    }

    function loadRegisters() {
        window.location.href = "html/registers.html"; //Abre nova pagina 
    }
function s(){
s(document).ready(function(){
    s("#awnser").submit(function(e){
        e.preventDefault();

        console.log();
        const resultado = {
            selecionado: s("input:checked")[0],
            certo: s ("[data-resultado= 'true")[0],
        }
        if (resultado.selecionado == resultado.certo){
            S(resultado.selecionado).parent().addClass("resultado_certo");
        }else{
            S(resultado.selecionado).parent().addClass("resultado_errado");
            S(resultado.certo).parent().addClass("resultado_certo");
        }
        
    })
  
 });
 
}

voltar();
  function voltar() {
      var btnVoltar = document.getElementById('btnVoltar');
      if (btnVoltar != null) {
        console.log(btnVoltar.value);
        console.log(btnVoltar);
        listenerButton(btnVoltar);
      }
  }

  
