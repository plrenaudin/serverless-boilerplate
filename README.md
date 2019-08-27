# Serverless Boilerplate Project

## Purpose

This project is meant to be used as a template for **serverless** projects which lets you **focus on the code**.

---

Setup and configuration is as minimal as possible.
Most of the configurations is located in one central location: package.json.

### Features:

- **Babel** Configuration
- **Next.js** Framework (version 9)
- **.less** file support
- **Jest** unit tests
- Code formatting on commit with **Prettier** and **Husky**
- **Eslint** with **Prettier** plugin
- **Mongoose** setup

## Targets

- `npm run dev` Starts **Next.js**
- `npm run test` Lints and run **Jest** unit tests
- `npm run build` and `npm run start` used by now to build and deploy Next.js application

## Deployment

### Prerequisites

- Now

  > Use the `now` CLI tool to deploy this project (`npm i -g now`)

- Some Mongo backend

> For example: https://www.mongodb.com/cloud/atlas

> Add the connection string to your `.env` file as shown in the `.env.example`

### How to

Deploy the entire stack in one command

```sh
$ now
```

Or use their Github integration.

## Folder structure

```
|
+- /components // React components + tests
|
+- /models // Mongoose Schema and DAOs
|
+- /modules // plain old javascript modules used by functions and components
|
+- /page // Next.js page folder
|   |
|   `- /api //use the Next.js api routes described here: https://nextjs.org/docs#api-routes
|       |
|       `- /myFunction // Serverless Function which will get deployed on the /api/myFunction endpoint
|             |
|             `- index.js // source code for myFunction
|             |
|             `- [id].js // source code for the /api/myFunction/:id endpoint

```

## Configuration files

- `next.config.js` needed for nextjs to enable .less support and `.env` variable injection
- `now.json` needed for now platform if you use [environment variables](https://zeit.co/docs/v2/serverless-functions/env-and-secrets/)
