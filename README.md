Fake Order System 

Objetivo 

Simular o ciclo de vida de um pedido para aprendizado de testes manuais e automação

### Comportamento do sistema (modelo mental)

- Criado 

- Pago 

- Cancelado 

- Estado inicial

- Criado 

### Transições permitidas 

- Criado -> Pago 
- Criado -> Cancelado 

### Transições proibidas 

- Pago -> Cancelado 
- Cancelado -> Pago 

Qualquer transição dupla ou repetida 

### Invariante (regras que nunca podem quebrar)

Um pedido só pode estar em um estado por vez 

Pedido pago nunca pode ser cancelado 

Pedido cancelado nunca pode ser pago 

O estado exibido na interface deve refletir o estado real do sistema 

### Interface mínima necessária 

- Botão "Pagar"
- Botão "Cancelar"

Mensagem de erro quando uma ação inválida ocorrer 


