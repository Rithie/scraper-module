### How To Set Up a Nodejs Project 

With your `package.json` file all ready to go, just install your dependencies with:

`npm install` in your project directory.

#### Setting Up a package.json

**Step 1:** 

First create a file called package.json in your directory by running this command line:

you can simply type `npm init` or  

`touch package.json` 

after that, inside of the file create this structure:

```json
{
  "name"          : "my-app-name",
  "version"       : "1.0.0",
  "description"   : "my description",
  "main"          : "main-file-name.js",
  "author"        : "my-name"
  }
```

**Step 2:** 

So now we can install the node module that we need. Let's suppose we need to install cheerio in our project. By running this command:  

`npm install cheerio --save` 

we will get:

```json
{
  "name"          : "my-app-name",
  "version"       : "1.0.0",
  "description"   : "my description",
  "main"          : "main-file-name.js",
  "author"        : "my-name",
  "dependencies": {
    "cheerio": "^0.22.0"
  }
}
```



**External Links:**

https://docs.npmjs.com/getting-started/installing-npm-packages-locally