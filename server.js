// 1. Require Mongoose
const mongoose = require('mongoose');
const { db } = require('./models/vampire');
// 2. Require your Model
const Vampire = require('./models/vampire')

// 3. Require your extra data source
const vampiresData = require('./populateVampires')
// console.log(vampiresData)

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/mongooseVampires';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.create(vampiresData, (err, createdVampires) => {
//     if(err) return console.log(err);
//     // console.log(`Created vampires: ${createdVampires}`)
// })

// ### Add some new vampire data
// Vampire.create({
//     name: 'Count von Count',
//     hair_color: 'black',
//     eye_color: 'black',
//     dob: new Date(1972, 1),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'f',
//     victims: 2,
//     title: 'Count'
// }, (err, createdVampire) => {
//     if(err) return console.log(err);
//     console.log(`Created vampire: ${createdVampire.name}`)
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({ gender: 'f' }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(`Found: ${foundVampires.length} female vampires`)
// })

// // https://mongoosejs.com/docs/api/query.html#query_Query-find
// Vampire.find({ victims : { $gt: 500 } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(`Found: ${foundVampires.length} with kc > 500`)
//     // console.log(foundVampires)
// })

// Vampire.find({ victims : { $lte: 150 } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(`Found: ${foundVampires.length} with kc <= 150`)
//     // console.log(foundVampires)
// })

// Vampire.find({ victims : { $ne: 210234 } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(`Found: ${foundVampires.length} with kc != 210234`)
//     // console.log(foundVampires)
// })

// Vampire.find({ victims : { $gt: 150, $lt: 500 } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(`Found: ${foundVampires.length} with 150 < kc < 500`)
//     console.log(foundVampires)
// })

// https://docs.mongodb.com/manual/reference/operator/query-comparison/

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// https://docs.mongodb.com/manual/reference/operator/query/exists/
// Vampire.find({ title: { $exists: true } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ a title`)
// })

// Vampire.find({ victims: { $exists: false } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ no victims`)
// })

// Vampire.find({
//     title: { $exists: true },
//     victims: { $exists: false } 
// }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ title and no victims`)
// })

// Vampire.find({
//     victims: { $exists: true },
//     victims: { $gt: 1000 } 
// }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ victims and >1000 victims`)
// })

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({
//     $or: [{ location: 'New York, New York, US' } , { location: 'New Orleans, Louisiana, US' }]
// }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} in NY or New Orleans`)
// })

// // https://docs.mongodb.com/manual/reference/operator/query/in/
// Vampire.find({ loves: { $in: ["brooding", "being tragic"] } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} loves brooding or tragic`)
// })

// Vampire.find({
//     $or: [{ victims: { $gt: 1000 } }, { loves: {  $in: ['marshmallows'] } }]
// }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} marshmellows or >1000 victims`)
// })

// Vampire.find({
//     $or: [{ hair_color: { $in: ['red'] } }, { eye_color: {  $in: ['green'] } }]
// }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} red hair or green eyes`)
// })

/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({ loves: { $in: ["frilly shirtsleeves", "frilly collars"] } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} frilly clothes`)
// })
// Vampire.find({ loves: { $in: ["brooding"] } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} brooding`)
// })

// Vampire.find({ loves: { $in: ["appearing innocent", "trickery", "lurking in rotting mansions", "R&B music"] } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ loves`)
// })

// Vampire.find({ loves: { $in: ["fancy cloaks"], $nin: ["top hats", "virgin blood"]  } }, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} w/ love for fancy cloaks but not top hats or virgin blood`)
// })

/////////////////////////////////////////////////
//### Negative Selection
// https://docs.mongodb.com/manual/reference/operator/query/and/
// Vampire.find({ $and: [
//     { loves: { $in: ["ribbons"] } },
//     { eye_color: { $nin: ["brown"] } }
// ]}, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} who loves ribbons w/o brown eyes`)
// })

// Vampire.find({ location: { $ne: "Rome, Italy" }}, (err, foundVampires) => {
//     if(err) return console.log(err);
//     console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} who aren't from Rome`)
// })

// Vampire.find({ loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, foundVampires) => {
//     if(err) return console.log(err);
//     // console.log(foundVampires)
//     console.log(`Found: ${foundVampires.length} who dont like the following`)
// })

Vampire.find({ victims: { $lt: 200 }}, (err, foundVampires) => {
    if(err) return console.log(err);
    // console.log(foundVampires)
    console.log(`Found ${foundVampires.count} vampires w kc < 200`)
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
