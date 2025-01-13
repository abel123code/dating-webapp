Lesson 3
When u change the prisma schema js make sure to run - npx prisma migrate dev & npx prisma studio

OR

npx prisma studio
npx prisma generate
npx prisma db push

React-Toastify allows you to add notifications to your app with ease.
npm install --save react-toastify (https://www.npmjs.com/package/react-toastify)

Lesson 4
Adding the prisma seed command in package.json

- Since the file is written in Typescript, you need to run it through a typescript executor such as ts-node
- ensures Prisma calls your file, compiles it and uses Prisma Client to seed the data
- The seed script needs to establish a connection to your database so it can perform create, update, or delete operations. - Prisma Client is the tool that handles this connection and provides type-safe queries for your schema.

Seeding Workflow
First download a typescript executor using npm i -D ts-node
When you run npx prisma db seed, Prisma looks up your package.json to find the "prisma": { "seed": "..." } script.
It executes that script, which in turn imports the Prisma Client and inserts your member data into the database.
Without importing and instantiating the Prisma Client in your seed file, you’d have no way of persisting that data.
