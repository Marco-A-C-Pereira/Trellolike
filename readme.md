# Todo-list-Habbiticalike/Trellolike 

## Descrição 

Olá seja bem-vindo(a) a meu projeto de lista de tarefas, o projeto que todo dev iniciante acaba criando em algum ponto de sua carreira de aprendizado quando se trata de CRUD.

O projeto foi desenvolvido utilizando a stack vanilla de web **(HTML/CSS/JS)** primariamente com o objetivo de aprimorar meus conhecimentos em **POO** (Programação Orientada a Objetos) e ter a oportunidade de fazer uso de libs, nesse projeto foi escolhida a lib **date-fns** para manipular datas com Javascript que é uma alternativa mais leve e modular do **Moment.Js**. 

## Utilização 
1. Clonar o repo
2. Para instalar as dependências utlizar o comando:
>npm install

3. Utilizar o comando: 
> npm run dev


## Melhorias e funcionalidades
* Validação nos campos
* Refatoração de código em alguns segmentos (Especialmente nos referentes a manipulação da checkbox de periodo)
* Adicionar Drag and Drop para organizar a lista
* Salvar o a posição no array geral de Cards caso o user desmarque a tarefa feita
* Exclusão de cards completos depois de um X período de tempo definido pelo usuário (1 dia, 7 dias, 1 mes)
* Geração de IDs não conflitante (Posso utilizar uma lib (Cuid2) que é um pouco overkill ou só um math.random)
* Refatoração completa do CSS (Não é o foco do projeto)