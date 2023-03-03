# 1337 Front End Javascript Code Assignment

## Goal

The goal of the assignment is to create a website which features a list of 1337 employees.

## Technologies

- Next.js (React.js)
- Typescript
- CSS
- Fetch

## Architecture

Since the product is just a website with static information, I've gone with a framework (Next.js) which supports static site generation.
This will dramatically increase page speeds as all the network requests are done at build time and all the page(s) are generated to static HTML/CSS/JS.

An alternative approach would be to run a light react+typescript project and just do all the data fetching and rendering on the client, however this will make the site slower and will introduce a loading state while the data is being fetched.

An alternative framework to Next.js for building static sites would be Gatsby.js.

## Packages

The only packages I've installed on top of the default Next.js starter project are:

- react-icons: because it's the fastest way to get icons into a react project.
- @netlify/plugin-nextjs: because I am hosting the application on netlify.

## Stories

| Design/accessibility                                    |     |
| ------------------------------------------------------- | --- |
| Support for color blindness (document what you’ve done) |     |
| Screen reader functionality                             |     |
| Use modern CSS throughout the application               | ✅  |

| Functionality                                     |         |
| ------------------------------------------------- | ------- |
| Sort by name and office                           |         |
| Filter by name and office                         |         |
| Enable switch between a grid and a different view | ✅      |
| Available on a free public url                    | ✅      |
| CI/CD pipleine from your repo                     | ✅ (\*) |

(\*) Netlify provides basic CD/CD checks eg. if it builds, and preview branches

| Testing/ QA                           |     |
| ------------------------------------- | --- |
| Use Typescript                        | ✅  |
| Integration tests of components       |     |
| end-to-end testing                    |     |
| Unit tests for existing functionality |     |

## Getting Started locally

1. Install packages by running `yarn` in the root.
2. Create a file called `.env.local` in the root of the project.
3. Copy the content of `.env.example` into `.env.local`
4. Fill in the secret values.
5. Start the development server by running:

```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the docs 👉 [Next.js Documentation](https://nextjs.org/docs) 👈
