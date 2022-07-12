const {moviesModel} = require("../models");

const getMovies = async (req,res) =>{
    const data = await moviesModel.find({})
    res.send({data})
}


module.exports = {getMovies}