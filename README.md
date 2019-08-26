# Serverless Boilerplate Project

## This is a WIP

This project is meant to provide a small template for serverless projects which includes:

- **Next.js** Framework
- **.less** file support
- **Jest** unit tests
- Code formatting on commit with **Prettier** and **Husky**
- **Eslint** with **Prettier** plugin
- More to come...

## Targets

`npm run dev` Starts **Next.js**
`npm run test` Lints and run **Jest** unit tests

## Deployments

For the moment we are focusing on the [Now](now.sh) platform.

Use the `now` CLI tool to deploy this project (`npm i -g now`)

## Folder structure

```
|
+- /api
|   |
|   `- /myLambda // Lambda function which will get deployed on the /api/myLambda endpoint
|         |
|         `- index.js // source code for myLambda
|
+- /components // React components
|
+- /modules // plain old javascript modules used by lambdas and components
|
+- /page // Next.js page folder

```
