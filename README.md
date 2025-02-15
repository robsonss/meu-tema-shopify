# Meu Tema Shopify

## Download e instalação

### - Download do Tema

Navegue até o diretório onde ficará armazenada a pasta com os arquivos do tema e então clone o repositório com o comando:  
 `git clone https://github.com/robsonss/meu-tema-shopify.git`

### - Dependências

#### Nodejs

Use a versão `14.16.1`

### - Instalação do ThemeKit

#### Windows

Instale o Theme Kit com [Chocolatey](https://chocolatey.org/) executando o seguinte comando: <br>
`choco install themekit`

#### Linux

Use o seguinte script de instalação para baixar e instalar automaticamente a versão mais recente do Theme Kit: <br>
`curl -s https://shopify.dev/themekit.py | sudo python3`

#### MacOs

Use o [Homebrew](https://brew.sh/) para instalar o Theme Kit executando os seguintes comandos: <br>
`brew tap shopify/shopify` <br>
`brew install themekit`

### - Instalação do Gulp

`npm install --global gulp-cli`

### - Instalar demais dependências

`npm install`

## Como rodar o projeto

Para iniciar o ambiente de desenvolvimento altere no arquivo *config.yml* o `theme_id` com o id do tema que deseja customizar e rode o comando: <br>

#### abra um terminal e execute o comando abaixo

`theme watch` para temas não publicados 

`theme watch --allow-live` para customizar o tema em produção.

#### abra um segundo terminal e execute o comando abaixo

`npm run start`

[Comandos ThemeKit](https://shopify.dev/docs/themes/tools/theme-kit/command-reference)

### IMPORTANTE

Primeiro você deve rodar o terminal com o comando `npm start`, e salvar um arquivo para gerar a pasta build, para depois rodar o terminal com o comando `theme watch` e assim sincronizar o seu tema local com o tema no admin da Shopify
<br>