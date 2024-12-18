let processo = document.getElementById('processo')
let competencia = document.getElementById('competencia')
let pago = document.getElementById('pago')
let emissao = document.getElementById('emissao')
let pagamento = document.getElementById('pagamento')
let prazo = document.getElementById('prazo')
let diaAtraso = document.getElementById('diaAtraso')


    function teste(){
        console.log(processo.value)
        console.log(competencia.value)
        console.log(pago.value)
        console.log(emissao.value)
        console.log(pagamento.value)


        // Faz o calculo do prazo de pagamento 
        let dataEmissao = new Date(emissao.value); 
        dataEmissao.setDate(dataEmissao.getDate() + 30)
        prazo.innerHTML = dataEmissao.toLocaleDateString('pt-BR')
        
        // Faz o calculo do dias de atraso 
        let dataPagamento = new Date(pagamento.value);
        let atrasoEmMs = dataPagamento - dataEmissao;
        let atrasoEmDias = atrasoEmMs / (1000 * 3600 * 24);
        diaAtraso.innerHTML = atrasoEmDias
    }
