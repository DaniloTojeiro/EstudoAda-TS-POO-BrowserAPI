# Configuração do Typescript

1. Inicializar um projeto Node.js
npm init

2. Instalar o TypeScript
  2.1 - Instalação global: `npm install -g typescript`
  2.2 - Instalação local(dentro do projeto, mais indicado): `npm install typescript -D`

3. Utilizar o TypeScript instalado para transpilar o nosso código(converter nosso código TS para JS). 
npx tsc (nome do arquivo) --watch (para compilalr automaticamente )

4.Criar arquivo de configuração do projeto TS
npx tsc --init