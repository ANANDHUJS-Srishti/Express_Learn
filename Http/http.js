// const http = require("http")

// http.createServer((req,res)=>{
//     res.write("This is nodejs")
//     res.write("\nHello World")
//     console.log("url" , req.url);


//     res.end();
// }).listen(3001,()=>{console.log("Server is running at 3001")
// });




const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile(path.join(__dirname, "Views", "index.html"), "utf8", (err, data) => {
        if (err) {
            console.log(err);
            res.end("Error loading page");
            return;
        }


        res.end(data);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});