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

### Aula 4
