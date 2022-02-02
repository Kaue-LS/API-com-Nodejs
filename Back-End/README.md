-Criando Cadastro de Clientes com Node.Js e React.js
-Fazendo CRUD e ligando com o Front-End

-Bibliotescas instaladas:
--Express
--Bcrypt
--Mongoose
--Cookie-Parser
--Cors
--concunrrently
--nodemon como desenvolvedor
--jsonwebtoken

-Iniciando APP:
--Terminal npm dev ou node server.js

-Pastas:
--model= Schema para o banco de dados mongoDB
--controllers=Aplicando funções de controle para o usuário com o mongoose


-Arquivos:
--Server= Conectando ao MongoDB e iniciando servidor no localhost. Alem de colocar ferramentas que o express ira utilizar como cors e json
--Routes= Rotas do APP e determinada função que ela ira executar no userController







Banco de dados:
--Modelo:
nome
sobrenome
admin
email
senha








------------------------------------------------------------

FRONT-END
-Na pasta cliente digina npm install -g create-react-app
e dps exclui o cliente
-Entra na pasta novamente com comando cd cliente e em seguida coloca:
 create-react-app cliente

- instale concurrently

-No arquivo package.json escreva esssas ações :
 "cadastro": "npm start --prefix cadastro",
    "server": "nodemon server.js",
    "dev": "concurrently \"npm run server\" \"npm run cadastro\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  
  Para iniciar tanto o back end como tambem o front-end

-Baixe as seguintes bibliotecas: Axios, React-Router-Dom,Styled-Components

-Certifica-se que esteja baixando na pasta do react


--Pastas
Components:
-NavBar
-SideBar--Somente para administradores
-Termos

Services:
-AdminRoutes--Rotas somente para administradores
-Api--Api criada pelo banco de dados
-Auth--funções que pegam valores colocados no localsotrage apos login ou cadastro
-PrivateRoute--ROtas privada somente para os que se cadastraram

