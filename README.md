Função latestDate:
Esta função aceita dois parâmetros, data1 e data2, ambos do tipo Date. Sua função é comparar essas duas datas e retornar a mais recente. Se data2 for posterior a data1, então data2 é retornada; caso contrário, data1 é retornada.

Função calcularIntervalo:
Ao receber duas datas, dataAntiga e dataRecente, esta função verifica se dataAntiga é de fato anterior a dataRecente. Em seguida, calcula a diferença de tempo entre essas duas datas, expressando-a em dias, horas, minutos e segundos. Por fim, retorna uma representação formatada dessa diferença temporal em forma de string.

formatarDataAtual:
Sem exigir quaisquer parâmetros, esta função obtém a data atual e a formata seguindo o padrão "hora:minuto - dia/mês/ano". O resultado é uma string que representa a data atual de maneira formatada.

Função calcular:
Ativada pelo clique no botão de cálculo, esta função recupera os valores dos campos de data do formulário. Em seguida, adiciona um dia a cada uma dessas datas usando a função addDay(). Determina a data mais recente entre as duas com a função latestDate(). Calcula o intervalo de tempo entre essas datas com a função calcularIntervalo(). Então, formata a data atual com a função formatarDataAtual(). Por último, exibe os resultados na página HTML.

Função latestDate:
Esta é uma versão alternativa da função latestDate1, definida anteriormente. Ambas as funções realizam a mesma operação. Aqui, recebe dois parâmetros, date1 e date2, e retorna a data mais recente entre elas.

Função addDay:
Recebe uma data (date) como entrada. Incrementa essa data em um dia e retorna o resultado, que é a nova data resultante.
