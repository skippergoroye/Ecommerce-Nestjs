# Udemy

Course Name: Building Scalable Projects with NestJS: Advanced Authorization, Real-Time Notifications, Email Integration, and More

https://www.udemy.com/course/nestjs-ultimate-backend-development-with-nodejs-framework/

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

i-> npm i bcrypt npm i -D @types/bcrypt (Security -> Encryption and Hashing for bcrypt)
ii-> overview -> gaurd ( to decode the jwt)
https://docs.nestjs.com/guards

iii-> Storing token in postman (https://www.youtube.com/watch?v=8Hpn-NJL0HI)

iv-> (overview -> custom decorators)

4. Typeorm Relationship
   https://typeorm.io/docs/relations/many-to-one-one-to-many-relations

5. Data Validation using class Validation
   -> https://docs.nestjs.com/techniques/validation

npm i --save class-validator class-transformer

(Database connection) -> https://docs.nestjs.com/techniques/database

6. How to het all Endpoints
   nestjs how to get all endpoint
   https://stackoverflow.com/questions/58255000/how-can-i-get-all-the-routes-from-all-the-modules-and-controllers-available-on

7. npm nest g resource femi

8. Adding swagger
   npm install --save @nestjs/swagger
   https://docs.nestjs.com/openapi/introduction

Google --> nestjs send 200 for post method
https://stackoverflow.com/questions/58824401/disable-status-201-for-all-posts-in-nestjs
https://docs.nestjs.com/controllers (Status code)

https://docs.nestjs.com/openapi/types-and-parameters

9. Slug
   npm i slugify

10. what is this used for in nestjs ParseIntPipe
    In NestJS, ParseIntPipe is a built-in pipe used to automatically convert a string to a number—usually in route parameters. It's especially useful when your route parameter is expected to be a number (like an id) but comes in as a string (which is how all URL params are received).







# Chatgpt Command For Migration
npm run build
npm run migration:generate -- src/migrations/AddDescriptionFiveToTask
npm run migration:run

# To show the list of Migration
npm run typeorm migration:show -- -d typeorm.config.ts




NOTE: 
-> npm run migration:run
If you get errors like relation "category" already exists, that means the migration is trying to recreate a table instead of altering it — in that case, delete the migration, clean it up, and regenerate.

# SQL QUERY

1.  DELETE FROM role
    WHERE name = 'skipper'

2.  DELETE FROM endpoint
    where id = 2
