![enter image description here](./screens/img.png)

Demo of Symfony Encore on Symfony Framework
=============


#### Implementation of JS/ES6 with  SASS  built in Webpack**


Directory of your assets in /assets with:

-- assets/css
-- assets/js
-- assets/img
-- assets/font


### To install

```
npm init
npm i --save  @symfony/webpack-encore 

To add SASS loader in webpack
npm i --dev sass-loader node-sass
```



### To run
```
Compile asset once
 ./node_modules/.bin/encore dev

Recompile assets automatocally when file changes
 ./node_modules/.bin/encore dev --watch

Compile & Optimize your assets for production
 ./node_modules/.bin/encore production
 
 Bonus: To use HMR on Webpack Server, just:
 ./node_modules/.bin/encore dev-server
```

### To configure
```
In this here:
webpack.config.js
```



A Symfony project created on June 16, 2017, 8:00 am.
