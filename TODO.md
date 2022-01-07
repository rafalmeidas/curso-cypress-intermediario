# Anotações

## Link da documentação da aula: `https://gitlab.com/wlsf82/curso-cypress-intermediario/-/tree/passo-a-passo-e-solucao-final`

### Aula 1

_Instalar o docker_
`https://docs.docker.com/desktop/windows/install/`

_Instalar pacote de atualização do kernel do Linux para que o Docker funcione no Windows_
`https://docs.microsoft.com/pt-br/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package`

_Instalar e iniciar a aplicação github no docker com o seguinte comando_
`docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce`

_Acessar a aplicação para redefinir a senha root_
`http://localhost/`

### Aula 2

_Iniciar o npm dentro do diretório para criação do arquivo package.json_
`npm init -y`

_Criar arquivo .gitignore_
`npm i cypress -D`

_Para iniciar o cypress_
`npx cypress open`

_Passos inicias_

- Excluir pastas de exemplos dentro da pasta no caminho 'cypress/integration/'
- Adicionar este trecho de código no arquivo cypress.json
  `{ "baseUrl": "http://localhost/" }`
- Criar pasta temp
- Criar arquivo com o nome 'cypress.env.json' e adicionar este trecho de código
  `{ "user_name": "root", "user_password": "password-do-usuario-root-definido-anteriormente", "gitlab_access_token": "access-token-criado-anteriormente" }`
- Colar os dados gerados na aplicação de teste nos seus respectivos atributos no arquivo 'cypress.env.json'

### Aula 3

**GUI - Graphical User Interface(Interface Gráfica de Usuário)**
_Criar pasta gui dentro do diretório 'cypress/integration/'_

_Ao criar arquivos spec.js basta adicionar a seguinte linha de código no ínicio do arquivo para ativar o intellisence_
`/// <reference types="Cypress" />`

_Para rodar os testes basta digitar o seguinte comando_
`npx cypress run`

_Para criar comandos customizados (funções para reuso) devem ser criadas dentro do diretório 'cypress/support/commands.js' o nome do arquivo pode ser alterado quando necessário, quando alterado será necessário alterar o import no arquivo index.js que fica dentro do mesmo diretório_

**fixtures**
_Dados em JSON que podem ser reutilizados durante os testes, pode definir objetos completos para reutilizar, também podemos utilizar uma biblioteca para gerar dados, durante o curso foi utilizada uma chamada faker para gerar dados aleatórios (fixtures) para uso nos testes_
`npm i faker -D`
_Para utilizar a biblioteca basta importar ela no arquivo .js da seguinte forma_
**Importar:** `const faker = require('faker');`
**Utilizar:** `faker.datatype.uuid(); faker.random.words(5)`

_Executar apenas um teste_
`npx cypress run --spec cypress/integration/gui/createProject.spec.js`

### Aula 4

_Problemas ao criar testes somente via GUI (Interface Gráfica de Usuário)_
**Testes de interface gráfica demoram muito para serem executados, o teste mais simples pode durar 10 segundos.**

- Testes demorados.
- Testes não independentes (se um botão não estiver aparecendo no front-end o teste irá quebrar)

### Aula 5

_Testes de API_

- É possível otimizar os testes criando funções de teste que fazem a chamada diretamente para a API, e com o dado criado em tela podemos acessa-lo e fazer testes diretos no front-end, assim, podemos diminuir o custo de fazer esse tipo de teste GUI.

**Teste de API ( chamada da função)**
_Exemplos em:_
_Chamada da função_
`cypress/integration/api/createProject.spec.js`

_Função_
`cypress/support/api_commands.js`

_API do gitlab_
`https://docs.gitlab.com/ee/api/projects.html#create-project`

### Aula 6

_Utilizar testes de API com testes GUI_
_Exemplos em:_
_Chamada da função_
`cypress/integration/gui/createIssue.spec.js`

### Aula 7

_Testar somente uma vez a GUI e usar ao máximo as funçõs API para redirecionar para as telas com os dados prontos_
