# Exercicio 1

# Card IMC

Atualizar o componente `CardImc` para exibir nome, altura, peso e IMC de cada pessoa. Adicionar botões `+` e `−` para alterar o peso, recalculando o IMC e mudando a cor do card conforme o resultado.

Criar um estado para a cor e utilizar `useEffect` para atualizá-la sempre que o IMC mudar, conforme o enunciado da atividade.

## Cores

- Verde: IMC ≤ 24,5.
- Amarelo: IMC > 24,5 e < 30.
- Vermelho: IMC ≥ 30.

## Dados

| Pessoa | Altura (m) | Peso (kg) | IMC |
| --- | --- | --- | --- |
| Fulano | 1,70 | 80 | 27,68 |
| Mengano | 1,90 | 109 | 30,19 |
| Esbelto | 1,80 | 70 | 21,60 |
