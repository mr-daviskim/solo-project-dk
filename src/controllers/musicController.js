const db = require('../db');
const asyncHandler = require("express-async-handler");

const musicController = {
    async addPiece(req, res, next){
        try{
            const { composer, piece_name, starting_date, additional_thoughts } = req.body.data;
            console.log({ composer, piece_name, starting_date, additional_thoughts });
            const values = [composer, piece_name, starting_date, additional_thoughts];
            const query = 
            `INSERT INTO pieces (composer, piece_name, starting_date, additional_thoughts) VALUES ($1, $2, $3, $4) RETURNING *`;
            await db.query(query, values); 
            // console.log(`${piece_name} by ${composer} was created.`);
            return next();
        }
        catch (error) {
            return next({
                log: error,
                status: 400,
                message: {error: 'Error adding piece.'},
            })
        }
    },

    test(req, res, next){
        console.log('hello from test')
        try{
            console.log(req.body.data.composer);
            return next();
        } 
        catch(error){
            return next({
                log: error,
            })
        }
    }
}

module.exports = musicController; 

// export default musicController; 