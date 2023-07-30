import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let list=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
    const today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	const date = today.toLocaleDateString("en-US", options);
    res.render("index.ejs",{
    items:list,
    title:date
  });
  
});

app.post("/",(req,res)=>{
    let item=req.body["newItem"];
    list.push(item);
    res.redirect('/');
});

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});