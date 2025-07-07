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

i->  npm i bcrypt npm i -D @types/bcrypt (Security -> Encryption and Hashing for bcrypt)
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

































# Chatgpt Command For Migration
npm run build
npm run migration:generate -- src/migrations/AddDescriptionFiveToTask
npm run migration:run



# SQL QUERY
1.
DELETE FROM role 
WHERE name = 'skipper'



2.
DELETE FROM endpoint
where id = 2

