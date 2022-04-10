const express= require("express")
const cookieParser=require('cookie-parser')
const cors= require("cors")
const mongoose=require("mongoose")
const Routes= require("./src/routes")
const app= express()

// Iniciando o servidor na porta
const port = process.env.PORT || 8000;

// colocando os requisitos que a const app vai usar
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*')
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
    
    app.use(cors())
    next()
})
app.use(cookieParser())
app.use(express.json())
//  O cors vai indicar quais dominios vai utilizar a api
app.use(Routes)

// ===================================


// Conectando ao banco de dados mongoDB
// Para conectar é necessário ter uma conta no MONGOATLAS
// cria a primeira database gratuita
// clica no botão connect no banco de dados criado
mongoose.connect('mongodb://localhost:27017/clientes',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Conexao realizada com sucesso')
}).catch((erro)=>{
    console.log(`Conexão falhou ${erro}`)
});

// ==================================================






// Iniciando servidor
app.listen(port,()=>{
    console.log(`Server iniciado na porta : http://localhost:${port} `)
})
