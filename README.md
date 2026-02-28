1. Summary

Playground showing ES module load in "local" from "remote" (`funky.js`) by URL (`import(url).then(m => console.log(m))`).
The playground code is served by two servers - live-server (local) and Node (remote). 
The results are seen in the two browsers (and their consoles) - see below.
The NodeJS server is set up for debugging (`.vscode/launch.json`).

2. Project structure
```
/project
  │
  ├── local/
  │     ├── index.html
  │     └── main.js
  │
  └── remote/
        ├── server.ts           // NodeJS server
        └── public/
              ├── index.html    // for testing purposes when "remote" is ran as standalone app (loads remote.js)
              ├── remote.js
              └── funky.js      // exposes "doSth()" method

```

3. Run install in both "./local" and "./remote" 
```
npm i
```

4. run the servers for "local" and "remote"
```
// in ./remote - live-server
npm start

// in ./local - NodeJs
npm start
```

5. Open 2 browsers (see the outputs in the console)
```
// local (loads the remote)
localhost:8080

// remote 
localhost: 3333
