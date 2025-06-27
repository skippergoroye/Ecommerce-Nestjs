# Installations
1. npm install --save @nestjs/typeorm typeorm pg (typeorm postgres)
# https://docs.nestjs.com/techniques/database



# https://docs.nestjs.com/techniques/database#async-configuration


2. npm i --save @nestjs/config (for dotenv)
https://docs.nestjs.com/techniques/configuration



# Authentication / Authorization
3. npm install --save @nestjs/jwt (for jwt Token security-> authentication)
https://docs.nestjs.com/security/authentication



nestjs register async jwt (Stack Overflow)
https://stackoverflow.com/questions/55148743/jwtmodule-registerasync-not-working-in-nestjs

i->  npm i bcrypt npm i -D @types/bcrypt (Security -> Encryption and Hashing for bcrypt)
ii-> overview -> gaurd ( to decode the jwt)
https://docs.nestjs.com/guards

iii-> Storing token in postman (https://www.youtube.com/watch?v=8Hpn-NJL0HI)

iv-> (overview -> custom decorators)
































# Chatgpt Command For Migration
npm run build
npm run migration:generate -- src/migrations/AddDescriptionFiveToTask
npm run migration:run

