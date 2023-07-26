const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));
//router

const data =[
    {id: 1, name:"iphone 14" ,price: 50000 , isActive:true, imageUrl:"1.jpeg"},
    {id: 2, name:"iphone 13" ,price: 45000 ,  isActive:false, imageUrl:"2.jpeg"},    
    {id: 3, name:"iphone 12" ,price: 20000 , isActive:true, imageUrl:"3.jpeg"}
    
];

app.use("/products/:id", function(req,res){
    const urun =data.find(u => u.id ==req.params.id)
    res.render("products-details",urun);

});

app.use("/products", function(req,res){
    res.render("products",{
        urunler: data
    });

});

app.use("/", function(req,res){
    res.render("index");

});


app.listen(3000 , () =>{
    console.log("listening on port 3000");
});
