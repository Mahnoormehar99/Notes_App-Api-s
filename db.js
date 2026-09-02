const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']);




const mongoose = require ('mongoose');

async function connectDB(){

    await mongoose.connect("mongodb+srv://mahnoorghulamsabir_db_user:qxD0mY8lbdfpxKWi@learnbackend.bchi6fl.mongodb.net/mahi")

    console.log("Database connected successfully");
}

module.exports = connectDB;