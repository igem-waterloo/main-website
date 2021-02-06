<p align="center">
  <img alt="Waterloo iGEM Logo" src="src/images/bird.svg" width="60" />
</p>
<h1 align="center">
  Waterloo iGEM's Team Website
</h1>

The team website is made with [Gatsby](https://www.gatsbyjs.com/), a React-based framework that allows for a seamless, app-like experience and lots of great plugins, such as [Tailwind](https://tailwindcss.com/), a CSS framework that allows you to style directly in your markup.

## Setting up 🚀

1.  **Install Node.js and Git**

    To run the code properly, you need to install Node.js, a package manager, and Git, a version control system that you'll use to update this Github repository. For more details, see [this doc](https://www.gatsbyjs.com/docs/tutorial/part-zero/). Also, if you don't have a code editor, downloading Visual Studio Code is recommended, and if you don't have a GitHub account, you'll need to make one.

1.  **Clone this repository**

    Before you can clone the repository, you first need to be invited to it. After you accept the invitation, in your terminal, navigate to the folder you want to save the website code package to and then clone this repository:

    ```shell
    cd the/folder/you/want/to/save/to
    git clone https://github.com/igem-waterloo/main-website.git
    ```

1.  **Edit and run your code**

    Open the entire site directory in your code editor. To see your code live in the browser:

    ```shell
    npm start
    # you can also do "gatsby develop"
    ```

    Your site is now running at `http://localhost:8000`!

1.  **Push your changes to the repo**

    To push (i.e. add) your changes to the master branch of the website repository:

    ```shell
    git remote add origin https://github.com/igem-waterloo/main-website.git
    git push -u origin master
    ```

## THE IMPORTANT PART: Updating the Website ❗

This section details how to change wording, dates, links, pictures, etc. to keep our site up-to-date, NOT how to change the design or structure. Unless you're familiar with web development, please do not mess around with the code and just change the parts detailed below.

(will be updated)

## (If you're interested) Overview of Gatsby Starter Files 🧐

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on. npm packages are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
