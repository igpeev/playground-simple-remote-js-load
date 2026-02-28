import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

const port = 3333;

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url || '');
    let filePath = './public' + parsed.pathname;


    if (filePath === './public/') {
        filePath = './public/index.html';
    }

    const ext = path.extname(filePath);

    const mime = {
        '.html': 'text/html',
        '.js': 'text/javascript',
    }[ext] ?? 'text/plain';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found!');
            return;
        }

        res.writeHead(200, {
          'Content-Type': mime,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`NodeJS server running at http://localhost:${port}`);
})
