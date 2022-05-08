import express from 'express'
import cors from 'express'
import { routes } from './routes';

const app = express();

//GET, POST, PUT, PATCH, DELETE
//GET = BUSCAR INFORMACOES
//POST = CADASTRAR INFORMACOES
// PUT = ATUALIZAR INFORMACAO DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMACAO UNICA DE UMA ENTIDADE - ESCOLHER EM RECEBER O NAO
//A NEWSLETTER DE UMA PLATAFORMA
//PODE USAR TUDO POST MAS SEMANTICAMENTE É MUITO ERRADO. 

app.use(cors());
app.use(express.json());
app.use(routes);  

  

app.listen(3333, () => {
    console.log('HTTP server running!');
});

//SQlite vai ser o banco de dados. nao precisa instalar nenhuma nova ferramenta. 
//PRISMA
