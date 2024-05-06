const express = require("express");
const port = 5000;

const app = express();

// app.get("/post", (req , res) =>{
//     res.json({message : "voici vos donnes"});
// });

app.use("/post", require("./routes/post.routes"))


app.listen(port ,() => 
console.log("server run on p ort" + port))