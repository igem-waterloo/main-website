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

    Before you can clone the repository, you first need to be invited to it by going to Settings > Manage Access > Invite teams or people.

    In your terminal, navigate to the folder you want to save the website code package to and then clone this repository:

    ```shell
    cd the/folder/you/want/to/save/to
    git clone https://github.com/igem-waterloo/main-website.git
    ```

    If it's the first time using Git on your computer, you'll also be prompted to sign into your GitHub account from the terminal.

1.  **Edit and run your code**

    Open the entire site directory in your code editor. To see your code live in the browser:

    ```shell
    # make sure you're cd'ed into the repository
    npm start
    # you can also do "gatsby develop"
    ```

    Your site is now running at `http://localhost:8000`!

1.  **Push your changes to the repo**

    If it's the first time pushing (i.e. adding) changes to the website repository:

    ```shell
    git remote add origin https://github.com/igem-waterloo/main-website.git
    git push
    ```

    If it's not:

    ```shell
    # to push changes for all files
    git add .
    # if you want to only add specific files, replace . with the file names separated by a space

    git commit -m "message you want to add to your commit"
    git push
    ```

    Alternatively, if you're using Visual Studio Code, you can do the above steps automatically by using the Source Control tab in the left menu bar, adding your commit message in the text field, and clicking the checkmark.

## THE IMPORTANT PART: Updating the Website ❗

This section details how to change wording, dates, links, pictures, colours, etc. to keep our site up-to-date, NOT how to change the design or structure. Unless you're familiar with web development, please do not mess around with the code and just change the parts detailed below.

### Adding images

All images should be added to `src/images`.

### Adding colours

Since we're using Tailwind, all colours should be added to `tailwind.config.js` under `theme:extend:colors`. Use a unique identifier for the colour (ex. title of the project) and the hex code for the colour you want to use.

### Updating Join Us button

Go to `src/components/header.js` and see comments above `applicationsOpen`.

To change the page users are redirected to if applications are closed, go to `src/pages/joinus.js` and update as you see fit.

### Updating announcement bar

Go to `src/components/layout.js` and follow the comments above `announcementBanner` to change the link, make it unclickable, or remove it.

### Updating team description

Go to `src/components/data/TeamData.js` and edit the subteam and ideal candidate descriptions.

### Updating advisors

Go to `src/components/data/AdvisorsData.js` and edit as needed.

### Updating projects

Go to `src/components/data/ProjectData.js`. Copy one of the existing blocks to use as a template for a new project. List all projects in reverse chronologial order (i.e. most recent to least recent). You do not need to edit `index.js` to change the 3 most recent projects shown on the home page, it will automatically do so from `ProjectData.js`.

### Updating FAQ

Go to `src/pages/faq.js` and add a new Q&A. There's no JSON file so that you can use links.

### Updating timeline

Go to `src/components/data/RecruitmentData.json` to update dates for key deadlines, events, etc. for the year.
Go to `src/components/data/YearData.json` to update the general goals for the team and subteams throughout the year.

## Deploying the website 🏃

### Creating the deployment files

To prepare the repository for deployment on the CS Club's server:

```shell
npm run deploy
```

This will update the `gh-pages` branch and convert all the files into pure HTML/CSS/JS.

### Debugging the deployment files

You can go to https://igem-waterloo.github.io/main-website/ after the website has finished building to see if anything has broken. But, to view the fonts and images properly, you'll need to go to `gatsby-config.js` and uncomment the `pathPrefix` to add the `main-website` slug to all the file paths.

Once you're finished debugging, comment out the `pathPrefix` again, run `npm run deploy` again, navigate to the `gh-pages` branch, click `Code` > Download ZIP, and extract the ZIP file.

### (If you don't already have one) Creating a CS Club account

1.  **Email SysCom to set up a club rep account**

    You must email the [Systems Committee](mailto:syscom@csclub.uwaterloo.ca) from the `uwigem@gmail.com` account so they can verify you’re a club member. Let them know you want to set up a club representative account under the `uwigem` club account.

    You'll need to send them:

    1. A picture/scan of your WatCard
    2. Your WatIAM username
    3. Your acknowledgement of having read, understood, and agreeing with their [machine usage policy](https://csclub.uwaterloo.ca/services/machine_usage)

    Once your club rep account has been created, they’ll give you a password which you’ll reset upon your first access into the CS Club machines.

1.  **Logging into a CS Club machine for the first time**

    1.  Open the terminal.
    2.  `ssh username@corn-syrup.csclub.uwaterloo.ca` (you can replace `corn-syrup` with any other CSClub machine you want to use, see the full list [here](https://wiki.csclub.uwaterloo.ca/Machine_List))
    3.  Say Yes when the security warning pops up. This is mainly a concern if you get the security warning after already logging into the machine once.
    4.  `Password:` enter the password SysCom gave you
    5.  You should now have access to the `corn-syrup` machine, but you won't need to do anything more in the shell, so go ahead and close it.

    Note: the `ssh` command should already be installed on your computer (Mac and Linux for sure, Windows 10 should have it). If you're on a Windows and you get an error, you might have to manually install it or you can download [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) instead.

1.  **Uploading deployment files onto our website**

    For Windows (see the [CSClub wiki](https://wiki.csclub.uwaterloo.ca/Club_Hosting#Accessing_Club_Resources) for Mac instructions):

    1. Download [WinSCP](https://winscp.net/eng/download.php)
    2. `File protocol: SFTP`
    3. `Host name: corn-syrup.csclub.uwaterloo.ca` (replacing `corn-syrup` with any other CSClub machine you want to use)
    4. `Port number: 22`
    5. `User name:` enter your WatIAM username
    6. `Password:` enter your new password after resetting it
    7. Click Login
    8. Say Yes when the security warning pops up
    9. Navigate to /users/uwigem/www
    10. Delete all the current files in the directory (it takes less than a minute).
    11. Drag over the deployable files you extracted from the `gh-pages` ZIP file to the directory.
    12. Check out the [website](https://igem.uwaterloo.ca/) to ensure everything is still functional!

For more information, see the [CSClub wiki](https://wiki.csclub.uwaterloo.ca/Main_Page).

## If you need any help 😣

Email the original developer of the site [Jeriann Hsiao](mailto:jlhsiao@uwaterloo.ca)

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
