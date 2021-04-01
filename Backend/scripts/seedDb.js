const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Bands"
);

const bandSeed = [
  {
    name: "The Grateful Dead",
    style: "Rock / Jam Band",
  },
  {
    name: "ACDC",
    style: "Rock",
    
  },
  {
    name: "Pink",
    style: "Pop",
   
  },
  {
    name: "Taylor Swift",
    style: "Pop / Country",
   
  },
  {
    name: "Eminem",
    style: "Rap",
   
  },
  {
    name: "Dr. Dre",
    style: "Rap",
    
  },
  {
    name: "Phish",
    style: " Rock / Jam Band",
   
  },
  {
    name: "Pantera",
    style: "Metal",
   
  },
  {
    name: "Metallica",
    style: "Metal",
   
  },
  {
    name: "Bad Company",
    style: "Rock",
   
  },
  {
    name: "Marshall Tucker Band",
    style: "Southern Rock",
   
  },
  {
    name: "lynyrd Skynyrd",
    style: "Southern Rock",
  
  },
  {
    name: "Pretty Lights",
    style: "Electronica / Dubstep",
  },
  {
    name: "Bass Nectar",
    style: "Electronica / Dubstep",
   
  },
  {
    name: "Dua Lipa",
    style: "Pop",
   
  },
  {
    name: "Bruce Springsteen",
    style: "Rock",
   
  }
];

db.Band
  .remove({})
  .then(() => db.Band.collection.insertMany(bandSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
