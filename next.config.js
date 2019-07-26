const withImages = require("next-images");
module.exports = withImages({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});

// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({

//   webpack: config => {
//     config.node = {

//      cssModule
//     :true

    


//     }
    

// return config;
// }
// });

