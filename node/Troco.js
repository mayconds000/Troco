module.exports = class Troco{
  // reais: Valor em reais podendo conter centavos
  // Deve retornar um objeto com a quantidadede notas
  getQtdeNotas (reais) {
    return this.calcNotas(Number(reais))
  }

  //Verifica Quantidade Disponivel
  verificaQuantidade (nota) {
  
   let qtdeNotasDisponiveis = [
      {value: 100, qtd: 2},
      {value: 50, qtd: 1},
      {value: 20, qtd: 0},
      {value: 10, qtd: 0},
      {value: 5, qtd: 1},
      {value: 2, qtd: 0},
      {value: 1, qtd: 0},
      {value: 0.5, qtd: 1},
      {value: 0.25, qtd: 0},
      {value: 0.1, qtd: 0},
      {value: 0.01, qtd: 0}
    ];

    qtdeNotasDisponiveis.forEach(function(ndisp) {
      if(ndisp.value == nota) {
        if(ndisp.value > 0) {
          return true;
        }
        return false;
      }
    });

  }

  // Calcula a quantidade de notas
  // valor: é a quantia passada por parametro
  calcNotas(valor) {

    let qtdeNotas = [
      {value: 100, qtd: 0},
      {value: 50, qtd: 0},
      {value: 20, qtd: 0},
      {value: 10, qtd: 0},
      {value: 5, qtd: 0},
      {value: 2, qtd: 0},
      {value: 1, qtd: 0},
      {value: 0.50, qtd: 0},
      {value: 0.25, qtd: 0},
      {value: 0.10, qtd: 0},
      {value: 0.01, qtd: 0}
    ];

    let self = this;

    // objeto a ser retornado
    let obj = {};

    qtdeNotas.forEach(function(nota) {
      try{

        while(valor >= nota.value) {
        
          if(valor >= nota.value){

              // verifica se existe o objeto com esse indice, caso não exista ('undefined') cria-se o mesmo e atribui zero a ele. 
              if(obj[nota.value.toString()] === undefined) obj[nota.value.toString()] = 0; 
              obj[nota.value.toString()] += 1; 
            

          } else {
            
            throw new Error('Não há dinheiro suficiente'); 
            
          }

          valor -= nota.value;

        }//endwhile

      } catch(e) {
       
        console.log(e.message);

      }  

    });

    return obj;
  }
}
