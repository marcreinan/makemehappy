# Make Me Happy
### Conte piadas e faça uma SPA feliz!

 Consiste em um projeto frontend de integração com a [Geek Joke Api](https://github.com/sameerkumar18/geek-joke-api) para consumir e exibir as piadas geradas pela api, o projeto foi criado utilizando os seguintes recursos:

- React.js: para a criação da estrutura do projeto e dos componentes jsx da interface gráfica.

- Bootstrap: para criação da grid, estilização dos elementos e do layout.

- Redux: para gerenciamento centralizado do estado da aplicação.

- Axios: para a execução de HTTP Requests para a api .

- Jest: para execução de testes na aplicação.

- Yarn: para gerenciamento dos pacotes e dependências do projeto

  

Outros módulos de apoio incluem: React, React-dom, React-router-dom, React-redux e Reactstrap

  

## ✅ Instalação

  

Faça o download a partir do link: https://github.com/marcreinan/makemehappy/archive/master.zip e descompacte em uma pasta de sua preferência. Ou caso você tenha o GIT e o YARN instalados em seu computador, digite no terminal o seguinte comando dentro da pasta de sua preferência:

  

```bash
git clone https://github.com/marcreinan/makemehappy.git
```

  

Aguarde até que o zip termine de descompactar ou o git termine de baixar os arquivos.

Entre na pasta makemehappy, e digite os comandos para instalar as dependencias e rodar o projeto:

  

```  bash
cd makemehappy
yarn
yarn start
```

  

O comando `yarn`  faz o download das dependência do projeto, já o comando `yarn start` inicia um servidor de desenvolvimento local para rodar o projeto. 
Aguarde até que os comandos finalizem no terminal, o projeto deverá ficar online e disponivel em http://localhost:3000, acesse o endereço em seu navegador e confira se está tudo ok!

  
  

## ☔ Dependências

  

Para correta execução desse projeto é necessário que você tenha instalado o YARN, o Node.js e o React.js. Baixe as versões para seu S.O nos links abaixo. 
Utilize o comando `yarn` na pasta do projeto para download dos módulos.

  
  

## 🚀 Tecnologias

  

Esse projeto foi desenvolvido com as seguintes tecnologias:

-[REACT.JS](https://pt-br.reactjs.org/)
-[BOOTSTRAP](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
-[REDUX](https://redux.js.org/)
-[AXIOS](https://github.com/axios/axios)
-[JEST](https://jestjs.io/)
-[YARN](https://yarnpkg.com/)
  

## 📃 Scripts disponíveis

  

Dentro da pasta do projeto, você poderá executar os seguintes comandos:
### `yarn start`
Inicia o projeto em modo de desenvolvimento.<br />

Abre [http://localhost:3000](http://localhost:3000) para que você visualize o projeto em seu navegador.

  

A página irá recarregar automaticamente caso você faça alguma alteração no código.<br />

Você poderá ver os erros no console.

  

### `yarn test`

  

Inicia a suite de testes em modo interativo.<br />

Mostrando quais os testes que foram executados com sucesso e quais falharam.

  

### `yarn build`

  

Faz a build do projeto para ser enviado para o ambiente de produção, a cópia otimizada é armazenada na pasta `build`.<br />

Essa versão é otimizada para uma melhor performance e carregamento.

  

Os arquivos da build são minificados e são adicionados hashes em seus nomes.<br />
  

## 🧙 Funcionamento

  O objetivo é tornar a SPA 100% feliz, para isso é necessário ir gerando novas piadas até atingir o grau máximo de felicidade.
  O humor da SPA varia entre -100%(triste), 0(normal) e 100%(feliz).

### Tela inicial - rota [/](http://localhost:3000/)

Na tela inicial, temos a apresentação do app e o elemento Smiley, uma carinha(emoji) que demonstra o nível de humor da SPA, a qual começa com um nível normal (0).

![Tela Inicial](https://picsum.photos/400)

  

### Tela Estou Triste - rota [/estoutriste](http://localhost:3000/estoutriste)

Ao clicar na tela inicial, o usuário é levado para tela Estou triste, onde o nível de humor do SPA é 100% triste (-100%) e a cara do Smiley muda refletindo o seu humor tristonho.

![Tela Estou Triste](http://picsum.photos/400)

  

### Tela Me Faça Feliz - rota [/mefacafeliz](http://localhost:3000/mefacafeliz)

Ao clicar na tela Estou Triste, o usuário é levado para a tela Me Faça Feliz, onde é exibida uma modal contendo piadas geek.![Tela Me Faça Feliz](http://picsum.photos/400)
Na primeira vez que o usuário acessa essa tela, é mostrado um aviso sobre o seu funcionamento.

obs1: Caso o usuário recomece o jogo esse aviso na modal não será mostrado e a piada será gerada logo ao entrar na tela. 
obs2: Caso o usuário entre diretamente nessa tela (chamando-a diretamente na url do navegador) e os estados estejam com valores inválidos, será redirecionado para a tela inicial.

  
A cada piada lida, o usuário tem entre 1 e 25% (valor gerado randomicamente) de chance de melhorar o humor da SPA, conforme a SPA vai melhorando seu humor, o Smiley muda seu rosto, a cor de fundo é alterada e o indicador de nível de humor também é atualizado.
![Tela Me Faça Feliz- Smiley alegre](http://picsum.photos/400)

Assim que seu humor atingir 100% de felicidade a SPA libera o modal e mostra a recompensa do usuário, uma foto aleatória de algum lugar do mundo,ao fecha a modal o app é reiniciado na tela inicial.
![Tela Parabens](http://picsum.photos/400)



## 🧐 Estados Possíveis 

| Nível de humor| Smiley  |
|-------|----|
|= 100% | 😂 |
|>=  85%| 😁 |
|>=  75%| 😅 |
|>=  65%| 😄 |
|>=  50%| 😄 |
|>=  35%| 😊 |
|>=  20%| 😏 |
|>=  10%| 🙂 |
|>=  0% | 😐 |
|>= -15%| 🙁 |
|>= -25%| 😕 |
|>= -35%| 🤨 |
|>= -50%| 😒 |
|>= -75%| 😔 |
|>= -85%| 😖 |
|>= -100| 😫 |
