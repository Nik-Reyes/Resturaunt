### Folder Setup

1. Create new repo on GitHub
2. Create dedicated folder on your system for that repo
3. `cd` to the newly created folder
4. `git clone` the repo
5. `cd` inside the repo folder
6. Create a package.json file for npm to record information about packages we use (like Webpack)
   - `npm init -y`
   - If the package.json file contains `"type": "commonjs"` or `"type": "module"` inside, remove it
7. Install Webpack
   - `npm install -D webpack webpack-cli`
8. Create src and dist directories in project root

### Adding webpack.config.js

9. Create a `webpack.config.js` file in project root
   - Add to `webpack.config.js`
   ```webpack.config.js
       const path = require("path");
       module.exports = {
         mode: "development",
         entry: "./src/index.js",
         output: {
           filename: "main.js",
           path: path.resolve(__dirname, "dist"),
           clean: true,
         },
       };
   ```

### Handling HTML

10. Install and add HtmlWebpackPlugin to the webpack config file

    - `npm install -D html-webpack-plugin`
    - Add to `webpack.config.js`

    ```
      const path = require("path");
      const HtmlWebpackPlugin = require("html-webpack-plugin");

      module.exports = {
        mode: "development",
        entry: "./src/index.js",
        output: {
          filename: "main.js",
          path: path.resolve(__dirname, "dist"),
          clean: true,
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: "./src/template.html",
          }),
        ],
      };
    ```

### Loading CSS

11. Install and add css loaders to webpack config file

    - `npm install -D style-loader css-loader`
    - Add to `webpack.config.js`

      ```
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");

        module.exports = {
          mode: "development",
          entry: "./src/index.js",
          output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
          },
          plugins: [
            new HtmlWebpackPlugin({
              template: "./src/template.html",
            }),
          ],
          module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
        };
      ```

### Handling Images

12. Three ways of handling images with Webpack

    - 12.a: Image files used within the CSS file inside `url()`

      - `css-loader` handles this automatically

    - 12.b: Handling images implemented with `<img>` tags

      - `npm install -D html-loader`
      - Add to module.rules

        ```
        {
          test: /\.html$/i,
          loader: "html-loader",
        }
        ```

    - 12.c: Handling images imported directly into JavaScript

      - Add to module.rules

      ```
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i, type: "asset/resource",
      }
      ```

      - Inside the `.js` file

      ```
      import img from "./example.png";
      const image = document.createElement("img");
      image.src = img;

      document.body.appendChild(image);
      ```

13. Install Webpack dev server to eliminate needing to run npx webpack for a rebundle every time a change is made

    - `npm install -D webpack-dev-server`

14. Add properties for a source map and the dev server

    - Add to `webpack.config.js`

    ```
    const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
      mode: "development",
      entry: "./src/index.js",
      output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
      },
      devtool: "eval-source-map",
      devServer: {
        watchFiles: ["./src/template.html"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      },
    };
    ```

    - To start a dev server, run `npx webpack serve`
