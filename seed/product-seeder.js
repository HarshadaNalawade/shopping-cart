var mongoose = require('mongoose');
mongoose.connect("localhost:27017/shopping");

var Product = require('../models/product');
var products = [
    new Product({
        imagePath:"https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg",
        title:"Gothic Video Game",
        description:"Awesome Game",
        price:25
    }),
    new Product({
        imagePath:"https://static.giantbomb.com/uploads/original/2/29716/1344219-e8x1ls.jpg",
        title:"Warcraft:Reign of Chaos",
        description:"Reign of Chaos",
        price:30
    }),
    new Product({
        imagePath:"https://media.playstation.com/is/image/SCEA/minecraft-screenshot-01-ps4-ps3-psv-us-15aug14?$TwoColumn_Image$",
        title:"Minecraft Game",
        description:"Awesome Game",
        price:10
    }),
];
var done = 0;
for(var i=0; i<products.length; i++)
{
    products[i].save();
    done++;
    if(done === products.length){
        exit();
    }
}

function exit()
{
    mongoose.disconnect();
}
