$(function(){

    //funções de abrir e fechar formulario 

    abrirJanela();
    verificarClique();
     function abrirJanela(){
         $('.btn').click(function(){
         $('.bg').css('display','flex');
         // da para usar o .fadeIn() .hide() e o .show();
         })
     }
     function verificarClique(){
    
      var el = $('button');

      el.click(function(){
            $('.bg').css('display','none');
      })

     }
     $('input[name=telefone]').val('( )');
     $('form#form1').submit(function(e){

      var nome = $('input[name=nome]').val();
      var telefone = $('input[name=telefone]').val();
      var email = $('input[name=email]').val();
       
       if(verificarNome(nome) == false){
        if(verificarNome($('input[name=nome]').val()) == false){
            $('input[name=nome]').css('color','red');
            $('input[name=nome]').css('outline','1px solid red');
            $('.nom').text('Campo Invalido!');  
        }
        return false;
       }else if(verificarEmail(email) == false){
        if(verificarEmail($('input[name=email]').val()) == false){
            $('input[name=email]').css('color','red');
            $('input[name=email]').css('outline','1px solid red');
            $('.emai').text('Campo Invalido!');   
        }
        return false;
     }else if(verificarTelefone(telefone) == false){
        if(verificarTelefone($('input[name=telefone]').val()) == false){
            $('input[name=telefone]').css('color','red');
            $('input[name=telefone]').css('outline','1px solid red');
            $('.te').text('Campo Invalido!'); 
        }
        return false;
       }else{
        alert('formulario enviado!')
     }
     
    })
    /*
    $('input[type=text]').focus(function(){
     resetarCampoInvalido($(this));
     })
     $('input[type=tel]').focus(function(){
        $('input[type=tel]').css('color','#1d1e20');
        $('input[type=tel]').css('outline','none');
        $('input[type=tel]').val(telefone);
    })
*/
     // funções para estilizar o campo do formulario;
/*
     function aplicarCampoInvalido(){
        p.show();
        resetarCampoInvalido();
        //el.data('invalido','true');
     }
     */
     resetarCampoInvalido();
     function resetarCampoInvalido(){
         $('input[name=nome]').focus(function(){
            if(verificarNome($('input[name=nome]').val()) == false){
                $('input[name=nome]').css('color','#1d1e20');
                $('input[name=nome]').css('outline','none');
                $('.nom').text('');    
            }
         });
         $('input[name=telefone]').focus(function(){
            if(verificarTelefone($('input[name=telefone]').val()) == false){
                $('input[name=telefone]').css('color','#1d1e20');
                $('input[name=telefone]').css('outline','none');
                $('.te').text('');  
            }
         });
           
         $('input[name=email]').focus(function(){
            if(verificarEmail($('input[name=email]').val()) == false){
                $('input[name=email]').css('color','#1d1e20');
                $('input[name=email]').css('outline','none');
                $('.emai').text('');   
            }
         })
        //el.val($(this).val());
     }
     // funções para verificar o formulario

     function verificarNome(nome){
        // contando a quantidade de espaços entre o nome;
        if(nome === ''){
            return false;
        }
         var amount = nome.split(' ').length;
         var splitStr = nome.split(' ');
   
         if(amount >= 2){
             for(var i = 0;i < amount;i++){
                if(splitStr[i].toLowerCase().match(/[A-Za-z]{2,}$/) == null){
                    return false;
                }
             }
         }else{
             console.log('nao bate na condição')
             return false;
         }
        }

        function verificarTelefone(telefone){
            if(telefone === '( )'){
                return false
            }

           if(telefone.match(/^\([0-9]{2}\)[0-9]{9,10}$/) == null){
               return false;
           }

        }
    

        function verificarEmail(email){
    
          if(email === ''){
              return false
          }

          if(email.toLowerCase().match(/\S+@\S+\.\S+/) == null){
            return false;
        }
    }


}); 
