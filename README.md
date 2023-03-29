# Ecommerce-Iphone
ecommerce iphone

## Deploy do Site

# https://ecommerceiphone.netlify.app/



![image](https://user-images.githubusercontent.com/90574339/226213602-7864ac61-c191-46f1-89ee-667243b2e862.png)




# Criando um modelo de migrate
-- npx sequelize-cli model:create --name table --attributes nome:string,idade:number:cpf:number

# Gerar um Seed
npx sequelize-cli seed:generate --name demo-nomedaTable

# para rodar as migrate 

 -- npx sequelize-cli db:migrate

 # para rodar as seeds

 -- npx sequelize-cli db:seed:all 


# Voltar para o estado anterior

-- npx sequelize-cli db:migrate:undo


# Desfazendo seeds::
## Para desfazer seeds de uma tabela específica. 

-- npx sequelize-cli db:seed:undo --seed nome-do-arquivo


 ## Para desfazer todos os seeds feitos.
--npx sequelize-cli db:seed:undo:all

# Se rodarmos o comando:


# Populamos a tabela:
-- npx sequelize-cli db:seed:all


# Modelos, Migrações e seeds

Criar modelos e arquivos de migração via terminal

O que são e para que servem migrações com ORMs

Executar migrações para criação de tabelas no banco

Popular tabelas automaticamente através de arquivos seed
