<?php

/**
 * Class Troco
 * Classe para calcular a quantidade de notas necessárias para um determinado valor em Reais.
 * Suporta centavos.
 */
class Troco
{
    /**
     * Dado um valor em reais, retorna a quantidade de notas necessárias para formar o troco.
     *
     * @param $reais Valor em reais, podendo conter centavos.
     * @return array Quantidade de notas, indexada pelo seu valor.
     */
    public function getQtdeNotas($reais)
    {
        $qtdeNotas = [
          '100' => 0,
           '50' => 0,
           '20' => 0,
           '10' => 0,
            '5' => 0,
            '2' => 0,
            '1' => 0,
          '0.5' => 0,
         '0.25' => 0,
          '0.10' => 0,
         '0.01' => 0,
        ];

        $qtdDisponivel = [
          '100' => 3,
           '50' => 2,
           '20' => 1,
           '10' => 1,
            '5' => 1,
            '2' => 1,
            '1' => 2,
          '0.5' => 1,
         '0.25' => 2,
         '0.10' => 5,
         '0.01' => 6,
        ];

        if($reais <= 0)
            return $qtdeNotas;

        foreach ($qtdeNotas as $key => $value) 
        {
           
            while ($reais >= $key )
            {
                echo $qtdDisponivel[$key] . ' - ';
                if ($reais >= round($key, 2) && $qtdDisponivel[$key] > 0) 
                {
                    $qtdeNotas[$key]++;
                    $qtdDisponivel[$key]--;
                    $reais -= $key;
                    $reais = round($reais, 2);
                } else {
                    break;
                }
            }
        }
        
        /* Caso o valor de $reais não seja zero então o total de notas não foi o suficiente
         * Gera Exception 
         */
        if($reais)
        {
            throw new Exception("Não há notas suficientes");
        }

       
        return $qtdeNotas;
    }
}
