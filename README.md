# Boas Vindas ao Repositório do Delivery App

Projeto "Delivey App" desenvolvido pela equipe: Alexsandro Pinheiro , Aline Bury, Carlos Augusto Moura Pires, Rafael Friedel e Raphael Padilha. Com objetivo de criar o front-end e back-end simulando um aplicativo de delivery para uma distribuidora de bebidas. A aplicação possui as funcionalidades de:

1. Acessar login como usuário, pessoa vendedora ou administradora, porém para funções diferentes:
- (1) A pessoa cliente, que compra da lista de produtos;
- (2) A pessoa vendedora, que aprova, prepara e entrega;
- (3) A pessoa administradora, que gerencia quem usa o aplicativo;

2. Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

## Aprendizados com o projeto

Eu nunca tinha lidado com a biblioteca Tailwind para estilização, como a utilização dessa biblioteca foi sugestão do Rafael Friedel, achei interessante aprender algo novo. <br />
Um outro desafio legal foi receber o desafio do App sem requisitos específicos, nós do time quem precisamos criar requisitos para alcançar o comportamento esperado para a aplicação, aprender a criar esses requisitos foi muito importante porque nos ajuda a ficar mais próximos da realidade do mercado.

#

## O projeto é composto de 3 entidades importantes para sua estrutura:
#

1️⃣ Banco de dados:

Utilizamos o MySQL para o Banco de Dados e o `ORM Sequelize` para lidar com relacionamento da `API` com o Banco de Dados.

2️⃣ Back-end:

É o ambiente que utilizamos para responder as requisições do Front-end com os dados dos usuários, produtos, vendas e etc.

3️⃣ Front-end:

Aplicação visual onde os usuários fazem seus pedidos, checam o status dos mesmos, os vendedores acompanham seus pedidos e despacham os mesmos.

#

## Requisitos para executar o projeto localmente

- Nodejs instalado
- Banco de dados Mysql instalado localmente ou em um container Docker
- Dentro do diretório `back-end` há um arquivo `.env.example`, para que o Banco de dados funcione corretamente esse arquivo deve ter seu nome editado para `.env` em seqguida seu conteúdo deve ser alterado para a configuração do seu Mysql.

```bash
NODE_ENV=development
API_PORT=3001 #Porta de execução da API, melhor não mudar :)
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=SeuUsuarioMySql # Seu usúario do Mysql
MYSQL_PASSWORD=SuaSenhaMysql # Sua senha do Mysql
MYSQL_DB_NAME=delivery-app
EVAL_ALWAYS_RESTORE_DEV_DB=true
```

- Dentro do diretório `back-end` há um arquivo `jwt.evaluation.key.example`, para que a autenticação do `JWT` funcione corretamente esse arquivo deve ter seu nome editado para `jwt.evaluation.key`, seu conteúdo não precisa ser alterado, como é um projeto de estudos não tem problemas a chave de autenticação estar acessível.

# Iniciando o projeto

> Caso você queira testar o projeto na sua máquina

1. Para clonar o projeto para a sua máquina use o comando abaixo no seu terminal.

```bash
git clone git@github.com:Alexsandro-01/Delivery-app.git
```

2. Entrando no diretório e instalando as dependências.
```bash
cd Delivery-app

npm install
```

3. Subindo os serviços (A aplicação vai iniciar e abrir nop seu browser)

```bash
npm start
```

4. Entrando na aplicação:
- Você pode criar um novo usuário para você clicando no botão de criar conta, em seguida vai ser redirecionado para a página de produtos onde poderá realizar pedidos.
- Caso queira logar como vendedor para ver os pedidos que fez e poder mudar o status, você pode usar o login abaixo.

```json
"email": "fulana@deliveryapp.com",
"password": "fulana@123"
```
