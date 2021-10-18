# Desafio React JS

## Sobre

Mantive a estrutura ja existente no projeto inicial, inicialmente migrei o projeto para Typescript e para SCSS, ambas ferramentas serviram para agilizar o desenvolvimento. A estrutura de pastas final foi:

- src
  - assets
  - components
  - contexts
  - pages
  - routes
  - services
  - styles
  - types

O projeto utiliza de um método HTTP para pegar a lista de servidores da API e uma função que sempre retorna um erro para testar o comportamento da aplicação em caso de erro, a resposta API foi tipada na pasta types.

Surgiu um problema com o uso do atributo 'render' do react-router, quando utilizava o ContextProvider gerou um grande problema que levou bastante tempo pra ser solucionado, a maneira mais efetiva encontrada para soluciona-lo foi substituir o 'render' por 'component'.

Criei um contexto "ServersContext" que integra com a api para receber a lista de servidores e a lista de servidores selecionados. Esse contexto e compartilhado para os componentes de tabela e sumario de servidores.

Mantive bem fiel ao design no Figma e responsivo. Infelizmente não tive tempo para finalizar um requisito (ordenação da tabela) e alguns outros detalhes que gostaria de ter realizado como melhorar o reuso de componentes e estilo, principalmente para as tabelas, e automação de testes. Porem o core da aplicação foi desenvolvido, se necessário aqui esta meu contato: joaomoschetta@gmail.com

## Scripts

`yarn`

`yarn server`

`yarn start`
