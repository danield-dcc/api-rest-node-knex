--migration
npx knex migrate:make create-documents

--Le e executa a migration
npx knex migrate:latest 


# Requisitos Funcionais:
- [] O usuário deve poder criar uma nova transação.
- [] O usuário deve poder obter um resumo da sua conta.
- [] O usuário deve poder listar todas as transações que já ocorreram.
- [] O usuário deve poder visualizar um única transação


# Regras de Negócios:
- [] A transação pode ser do tipo crédito que somará ao valor total, ou débito que será subtraído.
- [] Deve ser possível identificarmos o usuário entre as requisições.
- [] O usuário só pode visualizar transações a qual ele criou


# Requisitos Não Funcionais: