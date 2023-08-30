## 01 - Trabalho Redis

# Setup

- Clonar o repo `git clone https://github.com/esensato/nosql-2023-02.git`
- Acessar o diretório `aula/sistema-fila`
- Instalar as dependências `npm install`
- Iniciar o servidor da aplicação `node server.js`
- Abrir o navegador e acessar a URL `http://localhost:8000/`
- Acessar o [Redis Client Console](https://app.redislabs.com/#/login)
- Obter as credenciais de acesso ao serviço

# Implementação

- Implementar um sistema de filas utilizando o **Redis** onde números são solicitados e adicionados em uma fila
- Um atendente chama o próximo da fila removendo o número mais antigo solicitado
