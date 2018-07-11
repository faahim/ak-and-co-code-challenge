# Sample web page for Ak&Co.

This is a web page build as part of the code challenge for Ak&Co.

A live version of this page is deployed using GitHub pages [here](https://faahim.github.io/ak-and-co-code-challenge/).

## Running the project locally

Clone this repo to your local computer using this command in your terminal:

```sh
git clone https://github.com/faahim/ak-and-co-code-challenge.git
```

You need to have Gatsby CLI installed globally to run and develop the project locally.
Run this command from your terminal to install gatsby-cli:

```sh
npm install --global gatsby-cli
```

You may need to use `sudo` in the beginning of the command depending on your user accounts write access to the system.

Once you have the repo and gatsby-cli tool, move to the project directory and install all the dependencies using these command:

```sh
cd ak-and-co-code-challenge
npm install
```

Now you can run the project using this command:

```sh
gatsby develop
```

This command will compile the project and start it on a localhost which you can access at `localhost:8000` using your web browser.
You can now open files in your favorite code editor and start developing. Gatsby has most of the common development tooling like hot-reloading, SASS compilation etc installed by default. Any change you make will be reflected immediately in the browser. Errors in code and linting issues will be logged to the terminal window.

## Building and Deploying

Once you're done making your changes, you can create an optimized static build of the site using the command:

```sh
gatsby build
```

The generated static HTML/CSS/JS files can be found under the `./public` directory.

If you're happy with the changes and want to publish the update, you can deploy the site directly to GitHub Pages using:

```sh
npm run deploy
```

This will deploy files from the `./public` folder to the GitHub repo specified in `./gatsby-config.js` files `pathPrfix` field.

## Why Gatsby?

React is my favorite tool of choice for most use cases. But in this case, it's a small, non-dynamic web page for which a full-blown React app seemed an overkill to me. Creating some plain, good old HTML, CSS files felt like the best option. But I also don't want to miss out on amazing features that React provides. Things like modular component, conditional rendering, generating content programmatically etc which enhances both development experience and usability a lot.

This is where Gatsby comes in. It's a static file generator tool. It generates plain HTML, CSS files from React codebase. Not just that, it has a ton of optimization built-in and smart features to enhance performance of web pages greatly. So essentially, I get to use best of the both world by using Gatsby.

You can think about Gatsby as just another version of the popular React starter `create-react-app`. But instead of generating a JavaScript app, it generates static web pages. You don't need to learn anything new to use Gatsby other than how the file structure work. You can learn more about Gatsby from their official site [here](https://www.gatsbyjs.org/docs/).

## Project Structure

The top-level project structure looks like this:\
![Gatsby project structure](https://i.imgur.com/iYAJSHL.png 'Project file structure')

All the source code is located under `./src` folder. You can find the following folder under the `./src` directory:

```
src/
├── components/
├── imgs/
├── layouts/
├── pages/
└── styles/
```

The `index.js` file under `./src/layouts` directory the main entry-point to the application. The content in this file is shared across the entire application/site. So, components that needs to rendered on every pages (e.g. Header, Footer) is imported and used here. This file also imports the contents of `index.js` file under the `./src/pages/` by default and renders them as the entry page. This means, the `index.js` file of `./src/pages/` directory acts as the homepage. We can then link to other pages from that page.

All the reusable React components is stored under the `./src/components` folder and imported in any other component as needed. Any component related to layout is stored under the `./src/layouts` folder. `./src/pages` folder houses components that import other components and form a page. All the stylesheets and images are stored in `./src/styles` and `./imgs` respectively.

## Other toolings

The following tools/libraries/plugins/methodologies is used in the project:

* **ESLint:** ESLint with Airbnb rules is used for code linting. This catches errors and enforces best practices.
* **Prettier:** For pretty formatting the codes.
* **Modern Normalize:** CSS Normalize for consistent default stylings of HTML elements across all browsers.
* **SASS:** CSS pre-processor for enhanced CSS features.
* **CSS Module:** CSS Module is a way to write CSS where the style is tightly coupled and scoped within a JavaScript component. This means, the stylings of a _class_ or _id_ is only applied to the component its applied to. CSS class names are written in camelCase since they are referenced from JavaScript as Object properties and not strings.
* **Others:** Other common approaches is used throughout the app for different purposes. For example, CSS Flexbox for creating layouts in CSS, Media Query for making it responsive, SVGs instead of raster image where possible etc.

## Personal Notes

I personally do feel like some parts of this project is maybe over-complicated. CSS Modules, for instance, is something that really shines in larger projects and doesn't really adds many benefits to small project like this one. But I chose these anyway because I wanted set up this project just the way I would for a serious project. And I guess that's what the purpose of this test is.

The font 'Klavika' that is used in the design, is a premium font and I don't own it. So I used the Google font 'Roboto' as an alternative. I hope that is okay.

I look forward for your feedback. Thank you so much for your time! :)
