# Todo-list-Habbiticalike/Trellolike 

## Descrição 

Olá, seja bem-vindo(a) a meu projeto de lista de tarefas, o projeto que todo dev iniciante acaba criando em algum ponto de sua carreira de aprendizado quando se trata de CRUD.

O projeto foi desenvolvido utilizando a stack vanilla de web **(HTML/CSS/JS)** primariamente para aprimorar meus conhecimentos em **POO** (Programação Orientada a Objetos) e ter a oportunidade utilizar libs, nesse projeto foi escolhida a lib **date-fns** para manipular datas com Javascript que é uma alternativa mais leve e modular do **Moment.Js**. 

## Utilização 
1. Clonar o repo
2. utlizar o comando para instalar as dependências:
>npm install

3. Utilizar o comando para rodar o servidor de webpack: 
> npm run dev


## Melhorias e funcionalidades adicionais
* Validação nos campos
* Refatoração de código em alguns segmentos (Especialmente nos referentes a manipulação da checkbox de período)
* Adicionar Drag and Drop para organizar a lista
* Salvar o a posição no array geral de Cards caso o user desmarque a tarefa feita
* Exclusão de cards completos após um X período definido pelo usuário (1 dia, 7 dias, 1 mês)
* Geração de IDs não conflitante (Posso utilizar uma lib (Cuid2) que é um pouco overkill ou só um math.random)
* Refatoração completa do CSS (Não é o foco do projeto)

## Dificuldades
* Configurar o ambiente para utilizar Webpack 
* Gerar um código mais DRY(Don't Repeat Yourself) possível e funções/métodos dinâmicos. 