const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

mongoose.connect("mongodb+srv://Red314:lohLmo61rDJ579QQ@recceta.yzq0y72.mongodb.net/?retryWrites=true&w=majority", {useNewURLParser: true, useUnifiedTopology: true})
.then(() => 
    {
        app.listen(3000, () => {console.log("Server running on 3000")})
    }
)

const postSchema = {
    email: String,
    password: String
}

const Post = mongoose.model("Post", postSchema);

app.post("/", function(req, res) {
    let newPost = new Post({
        email: req.body.email,
        password: req.body.password
    });
    newPost.save();
    res.redirect('/');
})

// mongo pass
// lohLmo61rDJ579QQ