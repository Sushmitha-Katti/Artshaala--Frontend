const express = require("express");
const compression = require("compression");
const next = require("next");
const nextPreloadHeaders = require("next-preload-headers");
const sm = require("sitemap");
const fs = require("fs");
const https = require("https");
const http = require("http");

//var cert = fs.readFileSync("./certs/cert.pem");
//var key = fs.readFileSync("./certs/privkey.pem");

var options = {
   key: key,
	cert: cert
}

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 80;
const app = next({ dev: false });
const handle = app.getRequestHandler();

const sitemap = sm.createSitemap({
  hostname: "https://www.mycareershapers.in",
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: "/medical", changefreq: "daily", priority: 0.3 },
    { url: "/engineering", changefreq: "monthly", priority: 0.7 },
    { url: "/contact" }, // changefreq: 'weekly',  priority: 0.5
    { url: "/about" },
    { url: "/blogs", changefreq: "daily", priority: 0.3 }
  ]
});

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(nextPreloadHeaders);
    /*
    if (!dev) {
      server.use(requireHTTPS);
    }
    server.get("/sitemap.xml", (req, res) => {
      sitemap.toXML(function(err, xml) {
        if (err) {
          return res.status(500).end();
        }
        res.header("Content-Type", "application/xml");
        res.send(xml);
      });
    });
    server.get("/sample.pdf", (req, res) => {
      var data = fs.readFileSync("./static/Sample.pdf");
      res.contentType("application/pdf");
      return res.send(data);
    });
    server.get("/robot.txt", (req, res) => {
      return res.sendFile("./robot.txt", {
        root: __dirname + "/static/",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        }
      });
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    }); */
    http.createServer((req, res) => {
	    console.log(req.headers);
	    console.log('Heeasdfsadfasdfsadfasdfasdfsad');
	    const arr = req.headers["host"].toString().split('.')
	    console.log(arr);
	    let str = ""
	    if(arr[0] !== 'www')
    		str = "https://www.";
	    else
		str = "https://"
	    res.writeHead(301, { "Location": str + req.headers["host"] + req.url })
	    res.end()
    }).listen(80, err => {
	    if(err) {
	    	throw err
	    }
	    console.log('HTTP server running at port: 80');
    })
    //server.listen(80, err => {
     // if (err) throw err;
      //console.log(`> Ready on http://localhost:${PORT}`);
    //});
    /*
    https.createServer(options, server).listen(443, err => {
    	if(err) {
		throw err
	}
	    console.log('HTTPS server running at port: 443');
    });*/
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
