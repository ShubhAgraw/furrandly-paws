const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/usersDB",{ useUnifiedTopology: true , useNewUrlParser: true } );

const userSchema2 = new mongoose.Schema({
  name : String,
  pass : String,
  age : Number,
  description : String,
  avatar : String
});
const User2 = mongoose.model("User2",userSchema2);

const notiSchema = new mongoose.Schema({
  name : String,
  avatar : String
});
const Noti = mongoose.model("notification",userSchema2);

const userSchema = new mongoose.Schema({
  name : String,
  pass : String,
  age : Number,
  description : String,
  avatar : String,
  match : [userSchema2],
  wait : [userSchema2],
  gender : String,
  species : String,
  phone : Number,
  notifications : [notiSchema]

});

const noti = new Noti({
  name : "Shiro",
  avatar : "https://i.ibb.co/VVpXY4z/panko.jpg"
})

const User = mongoose.model("User",userSchema);
const user2 = new User2({
  name : "Shiro",
  pass : "123",
  age : 2,
  description : "Glitch",
  avatar : "https://i.ibb.co/VVpXY4z/panko.jpg",
  match : [],
  wait : []
});
// user2.save();
const panko = new User({
  name : "Fatfat497Cat",
  pass : "123",
  age : 2,
  description : "FancyBoy",
  avatar : "https://i.ibb.co/VVpXY4z/panko.jpg",
  match : [],
  wait : [],
  gender : "Female",
  species : "Cat",
  phone : 1234567890,
  notifications : []
});
const mauri = new User({
  name : "Mauri",
  pass : "123",
  age : 2,
  description : "Cool as a Cucumber",
  avatar : "https://i.ibb.co/1f9W6pj/Mauri.jpg",
  match : [],
  wait : [],
  gender : "Male",
  species : "Cat",
  phone : 1234567890,
  notifications : []
});
// panko.save();
// mauri.save();
app.listen("5000",function(){
  console.log("Server started");
})
app.get('/',function(req, res){
  res.send("Hello");
});

//login route

app.get('/login', function(req, res){
  var fname = req.query.fname;
  var pass = req.query.pass;
  var gender;
  var species;
  var resArray = [];
  var error = 0;
  User.find({ name: fname}, function (err, docs) {


    if(docs.length != 0 ){
      if(pass == docs[0].pass)
      {
        resArray[0] = (docs);
        var nameArray = docs[0].notifications;
        resArray[2] = nameArray;
      }else{
        error = 1;
        res.send("Password incorrect");
      }
    }
    else{
      error = 1;
      res.send("User not found");
    }
  });
  if(error == 0){
  User.find({ name: fname}, function (err, docs) {
    if(docs.length != 0){
    gender = docs[0].gender;
    species = docs[0].species;
  }
  });
  User.find({}, function(err, docs){
    var max = docs.length;
      var rand = Math.floor((Math.random() * max) + 0);
      if(error == 0){
      while(true){
        if(docs[rand].name == fname || docs[rand].gender == gender || docs[rand].species != species){
        if(rand < max - 1){
          rand ++;
        }
        else{
          rand =  0;
        }
      }else{
        break;
      }
      }
    resArray[1] = [docs[rand]]
    res.send(resArray);
  }
  })
}
});

//signup route
app.get('/signup', function(req, res){
  var fname = req.query.fname;
  var pass = req.query.pass;
  var age = req.query.age;
  var description = req.query.description;
  var avatar = req.query.avatar;
  var species = req.query.species;
  var gender = req.query.gender;
  var phone = req.query.phone;

  User.find({ name: fname}, function (err, docs) {
    if(docs.length == 0 ){
      const user = new User({
        name : fname,
        pass : pass,
        age : age,
        description : description,
        avatar : avatar,
        match : [],
        wait :[],
        gender : gender,
        species : species,
        phone : phone,
        notifications : []

      });
      user.save();
        res.send("User Created");
    }
    else{
      res.send("User already exists");
    }
  });

});

//serach route
app.get('/search', function(req, res){
  var fname = req.query.fname;
  User.find({ name: fname}, function (err, docs) {
    if(docs.length != 0 ){
      res.send(docs);
    }
    else{
      res.send("User not found");
    }
  });

});

//adding to match route
app.get('/match', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var pArray;
  var nextProfile;
  var notification ;
  var gender;
  var species;
  User.find({ name: fname}, function (err, docs) {
    gender = docs[0].gender;
    species = docs[0].species;
    notification = new Noti({
      name : docs[0].name,
      avatar : docs[0].avatar
    })
  });
User.find({ name: fname2}, function (err, docs) {
  pArray = docs;
  var present = 0;
  var result = docs[0].notifications;

  for(var i = 0 ; i < result.length ; i++){
    if(result[i] != null && result[i].name == fname)
    {
      present = 1;
      break;
    }
  }

  if(present == 0 && notification != null) {
  result.push(notification);
  if(fname != fname2)
  {
    User.updateOne({ name: fname2}, {notifications : result} ,function(err){

});
}
}
});
User.find({}, function(err, docs){
  var max = docs.length;
    var rand = Math.floor((Math.random() * max) + 0);
    while(true){
      if(docs[rand].name == fname ||docs[rand].name == fname2 || docs[rand].gender == gender || docs[rand].species != species){
      if(rand < max - 1){
        rand ++;
      }
      else{
        rand = 0;
      }
    }else{
      break;
    }
    }
  nextProfile = [docs[rand]]
})
  User.find({ name: fname}, function (err, docs) {
    var matchArray = docs[0].match;
    var check = 1;
    for(var i = 0; i < matchArray.length; i++){
      if(matchArray[i].name == fname2){
        check = 0;
        break;
      }
    }
    for(var i = 0; i < docs[0].wait.length; i++){
      if(docs[0].wait[i].name == fname2){
        if(i == 0){
          docs[0].wait.shift();
        }else if(i == docs[0].wait.length - 1)
        {
          docs[0].wait.pop();
        }
        else{
            docs[0].wait.splice(i, i);
        }
        User.updateOne({ name: fname}, {wait : docs[0].wait } ,function(err){
          if(err){
          }
          else{
          }
        });
        break;
      }
    }

    if(check == 1){

          matchArray.push(pArray[0]);
    }
    User.updateOne({ name: fname}, {match : matchArray } ,function(err){
      if(err){
      }
      else{
        res.send(nextProfile);
      }
    });
  });

});



//add to wait route
app.get('/wait', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var pArray;
  var nextProfile;
  var gender;
  var species;
  User.find({ name: fname2}, function (err, docs) {
    var noti = docs[0].notifications;
    for(var i = 0 ; i < noti.length; i++){
      if(noti[i].name == fname){
        if(i == 0){
          noti.shift();
        }else{
          noti.splice(i, i);
        }
      }
    }
    User.updateOne({ name: fname2}, {notifications : noti } ,function(err){
      if(err){
      }
      else{
      }
    });
    pArray = docs;
  });
  User.find({ name: fname}, function (err, docs) {
    gender = docs[0].gender;
    species = docs[0].species;
  });

User.find({}, function(err, docs){
  var max = docs.length;
    var rand = Math.floor((Math.random() * max) + 0);
    while(true){
      if(docs[rand].name == fname ||docs[rand].name == fname2 || docs[rand].gender == gender || docs[rand].species != species){
      if(rand < max - 1){
        rand ++;
      }
      else{
        rand = 0;
      }
    }else{
      break;
    }
    }
  nextProfile = [docs[rand]]
})
  User.find({ name: fname}, function (err, docs) {
    var matchArray = docs[0].wait;
    var check = 1;
    for(var i = 0; i < matchArray.length; i++){
      if(matchArray[i].name == fname2){
        check = 0;
        break;
      }
    }
    for(var i = 0; i < docs[0].match.length; i++){
      if(docs[0].match[i].name == fname2){
        if(i == 0){
          docs[0].match.shift();
        }else if(i == docs[0].match.length - 1)
        {
          docs[0].match.pop();
        }
        else{
            docs[0].match.splice(i, i);
        }
        User.updateOne({ name: fname}, {match : docs[0].match } ,function(err){
          if(err){
          }
          else{
          }
        });
        break;
      }
    }


    if(check == 1){
          matchArray.push(pArray[0]);
    }
    User.updateOne({ name: fname}, {wait : matchArray } ,function(err){
      if(err){
      }
      else{
        res.send(nextProfile);
      }
    });
  });

});

//switch from match to wait
app.get('/switchtowait', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var pArray;
  var waitArray;
  var nextProfile;
User.find({ name: fname2}, function (err, docs) {
    pArray = docs;
  var noti = docs[0].notifications;
  for(var i = 0 ; i < noti.length; i++){
    if(noti[i].name == fname){
      if(i == 0){
        noti.shift();
      }else{
        noti.splice(i, i);
      }
    }
  }
  User.updateOne({ name: fname2}, {notifications : noti } ,function(err){
  });

});
  User.find({}, function (err, users) {
    var docs = [];
    for(var i = 0 ; i < users.length; i++){
      if(users[i].name == fname){
        docs.push( users[i]);
      }
      else if(users[i].name == fname2)
      pArray = [users[i]];
    }
    var matchArray = docs[0].match;
    waitArray = docs[0].wait;
    for(var i = 0; i < docs[0].match.length; i++){
      if(docs[0].match[i].name == fname2){
        if(i == 0){
          docs[0].match.shift();
        }else if(i == docs[0].match.length - 1)
        {
          docs[0].match.pop();
        }
        else{
            docs[0].match.splice(i, i);
        }
        User.updateOne({ name: fname}, {match : docs[0].match } ,function(err){
          if(err){
          }
          else{
          }
        });
        break;
      }
    }

          waitArray.push(pArray[0]);
    User.updateOne({ name: fname}, {wait : waitArray } ,function(err){
      if(err){
      }
      else{
        res.send("nextProfile");
      }
    });
  });

});

//switch from wait to match
app.get('/switchtomatch', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var pArray;
  var notification;
  var waitArray;
  var nextProfile;
User.find({ name: fname}, function (err, docs) {
  notification = new Noti({
    name : docs[0].name,
    avatar : docs[0].avatar
  })
});
User.find({ name: fname2}, function (err, docs) {
pArray = docs;
var result = docs[0].notifications;
if(notification != null){
result.push(notification);
}
if(fname != fname2)
{
  User.updateOne({ name: fname2}, {notifications : result} ,function(err){

});
}
});



  User.find({}, function (err, users) {
    var docs = [];
    for(var i = 0 ; i < users.length; i++){
      if(users[i].name == fname){
        docs.push( users[i]);
      }
      else if(users[i].name == fname2)
      pArray = [users[i]];
    }
    var matchArray = docs[0].match;
    waitArray = docs[0].wait;
    for(var i = 0; i < docs[0].wait.length; i++){
      if(docs[0].wait[i].name == fname2){
        if(i == 0){
          docs[0].wait.shift();
        }else if(i == docs[0].wait.length - 1)
        {
          docs[0].wait.pop();
        }
        else{
            docs[0].wait.splice(i, i);
        }
        User.updateOne({ name: fname}, {wait : docs[0].wait } ,function(err){
          if(err){
          }
          else{
          }
        });
        break;
      }
    }

          matchArray.push(pArray[0]);
    User.updateOne({ name: fname}, {match : matchArray } ,function(err){
      if(err){
      }
      else{
        res.send("nextProfile");
      }
    });
  });

});
//remove route
app.get('/remove', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var nextProfile;
  var gender;
  var species;
  User.find({ name: fname}, function (err, docs) {
    gender = docs[0].gender;
    species = docs[0].species;
  });
User.find({ name: fname2}, function (err, docs) {
  pArray = docs;
});
User.find({}, function(err, docs){
  var max = docs.length;
    var rand = Math.floor((Math.random() * max) + 0);
    while(true){
      if(docs[rand].name == fname ||docs[rand].name == fname2 || docs[rand].gender == gender || docs[rand].species != species){
      if(rand < max - 1){
        rand ++;
      }
      else{
        rand = 0;
      }
    }else{
      break;
    }
    }
  nextProfile = [docs[rand]]
  res.send(nextProfile);
})
})

app.get('/removeFromMatch', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  User.find({ name: fname2}, function (err, docs) {
    var noti = docs[0].notifications;
    for(var i = 0 ; i < noti.length; i++){
      if(noti[i].name == fname){
        if(i == 0){
          noti.shift();
        }else{
          noti.splice(i, i);
        }
      }
    }
    User.updateOne({ name: fname2}, {notifications : noti } ,function(err){
      if(err){
      }
      else{
      }
    });
  });
  User.find({ name: fname}, function (err, docs) {
    var matchArray = docs[0].match;
    for(var i = 0; i < docs[0].match.length; i++){
      if(docs[0].match[i].name == fname2){
        if(i == 0){
          docs[0].match.shift();
        }else if(i == docs[0].match.length - 1)
        {
          docs[0].match.pop();
        }
        else{
            docs[0].match.splice(i, i);
        }
        User.updateOne({ name: fname}, {match : docs[0].match } ,function(err){
          if(err){
          }
          else{
            res.send("");
          }
        });
        break;
      }
    }

  })
});

app.get('/removeFromWait', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  User.find({ name: fname}, function (err, docs) {
    var matchArray = docs[0].wait;
    for(var i = 0; i < docs[0].wait.length; i++){
      if(docs[0].wait[i].name == fname2){
        if(i == 0){
          docs[0].wait.shift();
        }else if(i == docs[0].wait.length - 1)
        {
          docs[0].wait.pop();
        }
        else{
            docs[0].wait.splice(i, i);
        }
        User.updateOne({ name: fname}, {wait : docs[0].wait } ,function(err){
          if(err){
          }
          else{
            res.send("");
          }
        });
        break;
      }
    }

  })
});

app.get('/contactDetails', function(req, res){
  var fname = req.query.fname;
  var fname2 = req.query.profile;
  var checked1 = 0;
  var checked2 = 0;
  User.find({ name: fname}, function (err, docs) {
    var matchArray = docs[0].match;
    for(var i = 0; i < docs[0].match.length; i++){
      if(docs[0].match[i].name == fname2){
        checked1 = 1;
      }
    }

  })
  User.find({ name: fname2}, function (err, docs) {
    var matchArray = docs[0].match;
    for(var i = 0; i < docs[0].match.length; i++){
      if(docs[0].match[i].name == fname){
        checked2 = 1;
      }
    }
    if(checked1 == 1 && checked2 == 1)
    {
      res.send("Contact me : " + String(docs[0].phone));
    }
    else if(checked1 == 0)
    {
      res.send("You have not liked " + fname2 + "'s profile yet");
    }
    else{
      res.send(fname2  + " has not liked your profile");
    }

  })
});
