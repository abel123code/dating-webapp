Lesson 3
When u change the prisma schema js make sure to run - npx prisma migrate dev & npx prisma studio

OR

npx prisma generate

# This command generates the Prisma client, which allows you to interact with your database using Prisma's API.

npx prisma db push

# This command pushes your Prisma schema changes to your database without creating a migration (for development environments).

npx prisma studio

# This command opens Prisma Studio, a web interface for browsing and editing your database content visually.

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

Summary of Their Roles for the useForm react hook

register Binds input fields to the form state.
handleSubmit Handles form submission, runs validation, and calls your submission callback.
reset Resets the form inputs to their initial or specified values.
setError Manually sets validation errors for specific fields.
errors Holds validation errors for each field.
isSubmitting Indicates if the form is being submitted (useful for disabling UI).
isDirty Indicates if any field has been modified.
isValid Indicates if the form is valid (all fields pass validation).
Let me know if you'd like additional examples or clarification!
