console.log("main.js loaded");

const fileName = 'funky.js';

import(`http://localhost:3333/${fileName}`)
  .then((mod) => {
    console.log(`${fileName} loaded`, mod);
    mod.doSth();
  })
  .catch((err) => console.error("Failed to load funky.js", err));
