--migration
npx knex migrate:make create-documents

--Le e executa a migration
npx knex migrate:latest 


# Requisitos Funcionais:
- [x] O usuário deve poder criar uma nova transação.
- [x] O usuário deve poder obter um resumo da sua conta.
- [x] O usuário deve poder listar todas as transações que já ocorreram.
- [x] O usuário deve poder visualizar um única transação


# Regras de Negócios:
- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que será subtraído.
- [] Deve ser possível identificarmos o usuário entre as requisições.
- [] O usuário só pode visualizar transações a qual ele criou


# Requisitos Não Funcionais: