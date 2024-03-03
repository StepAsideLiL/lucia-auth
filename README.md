# Lucia Auth

### Implement authentication with Nextjs (app router and server actions), Lucia, Prisma, and Sqlite as database

#### This small application at the moment the following auth features:

- Sign up and Sign in page/form (`/auth/sign-up` and `/auth/sign-in`)
- Change page content based on user log in state ie. user logged in or out (ex: `/` and `/[username]`)
- Public routes and protected routes (ex: `/[username]/secret`)
- Redirect logged out user to sign in page
- Sign out button

#### These following features needs to be tested

- OAuth providers such as google and github
- Private api routes (perform Get, Post, Put, Patch, Delete operation for varified login user)
- Github like auth during sensetive action (ex: varify password when a repository is being deleted)
- Email varification
- Email or Username input field
