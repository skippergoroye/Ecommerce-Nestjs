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

# Env

DB_HOST=localhost
DB_PORT= 5432
DB_USERNAME=postgres
DB_PASSWORD=skipper
DB_DATABASE=ecommerce-nestjs
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRE_DAY=1d





Delete The Last Commit
Option 2: Remove the last commit completely (rewrite history)

If you're sure no one else is using that commit:

git reset --hard HEAD~1
git push origin master --force



# For Pagination
npm i nestjs-paginate
https://www.npmjs.com/package/nestjs-paginate




FIle Upload
npm i -D @types/multer
npm install --save-dev @types/multer

npm install cloudinary streamifier && npm install -D @types/streamifier




DataBase Relationship
## One-to-Many: The Mom & Kids Version 🧒👧👦

Imagine a **Mom** and her **children**.

---

### The Simple Idea

> One Mom can have **many** kids.
> But each kid has only **one** Mom.

```
Mom Alice
  ├── Kid: Bob
  ├── Kid: Charlie
  └── Kid: Diana
```

That's it. That's One-to-Many. 🎉

---

### In Code Terms

**Mom** says: *"I have many kids"*
```typescript
@OneToMany(() => Kid, (kid) => kid.mom)
kids: Kid[];
```

**Kid** says: *"I have one mom"*
```typescript
@ManyToOne(() => Mom, (mom) => mom.kids)
mom: Mom;
```

---

### The Golden Rule 🏅

The **kid** carries the mom's ID in their pocket (`mom_id`).

The mom doesn't carry anything — she just knows her kids exist.

```
kids table
| id | name    | mom_id  |  ← kid carries this
|----|---------|---------|
| 1  | Bob     |   1     |
| 2  | Charlie |   1     |
| 3  | Diana   |   1     |
```

---

### That's literally it

| Real life | TypeORM |
|-----------|---------|
| Mom | `@OneToMany` |
| Kid | `@ManyToOne` |
| Kid carries mom's ID | Foreign key lives on the "many" side |
| One mom, many kids | One entity, many related entities |

The **kid always holds the connection**, not the mom. 👶




## Using YOUR Code 🎯

### Your **User** entity says:

```typescript
@OneToMany(() => Post, (post) => post.user)
posts: Post[];
```

**In 5-year-old terms:**
> "I am a **User**. I have many **Posts**. Each post knows me as `post.user`"

---

### Your **Post** entity says:

```typescript
@ManyToOne(() => User, (user) => user.posts)
user: User;
```

**In 5-year-old terms:**
> "I am a **Post**. I belong to one **User**. The user knows me through `user.posts`"

---

### How they point at each other

```
User ──────────────────────► posts: Post[]
          @OneToMany

Post ──────────────────────► user: User
          @ManyToOne
```

They are **holding hands** — User points to Post, Post points back to User. TypeORM needs both hands or it gets lost. 🤝

---

### The database reality

The **Post table** carries the foreign key, not User:

```
posts table
| id | title        | user_id |  ← this is your "user: User" line
|----|--------------|---------|
| 1  | First post   |    1    |
| 2  | Second post  |    1    |
| 3  | Third post   |    2    |
```

Your `user: User` line in Post → **creates this `user_id` column** automatically. That one line does the heavy lifting. 💪

---

### The two arrow functions explained simply

```typescript
@OneToMany(() => Post, (post) => post.user)
//          ↑               ↑
//     "related to Post"   "find me on Post using post.user"


@ManyToOne(() => User, (user) => user.posts)
//          ↑               ↑
//     "related to User"   "find me on User using user.posts"
```

They are literally just **telling each other where to find the other one**. That's all those arrows do.
