import React from 'react';
import Navbar from './Navbar'; 
import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPiece() {
      //creating a state that has all of the data from the form
      const [piece, setPiece] = useState({
        composer: '',
        piece_name: '',
        starting_date: '',
        additional_thoughts: ''
      })

      //this function takes the input from the form, forces it to persist, and then puts all of the data into the setPiece object (which is the updated state)
      //it finds the name attribute within the html and sets the value to that attribute found within the state object
      const handleInput = (e) => {
        e.persist(); 
        setPiece({...piece, [e.target.name]: e.target.value});
      }
      //preventDefault prevents loading of the page
      const savePiece = async (e) => {

        e.preventDefault();
        console.log("clicked")
        const data = {
            composer: piece.composer,
            piece_name: piece.piece_name,
            starting_date: piece.starting_date,
            additional_thoughts: piece.additional_thoughts 
        }

        const formData = new FormData();
        formData.append('composer', piece.composer);
        formData.append('piece_name', piece.piece_name);
        formData.append('starting_date', piece.starting_date);
        formData.append('additional_thoughts', piece.additional_thoughts);
        //use axios to post, send data 
        
          try {
            const response = await axios.post('http://localhost:3000/addpieces', formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });
            console.log(response.data);
            alert('Piece was successfully created!');
          } catch (err) {
            console.log("Could not add piece.", err);
          }
        };
        
//         axios.post('http://localhost:3000/addpieces', formData, {
//   headers: {
//     "Content-Type": "multipart/form-data"
//   }
// })
//   .then((response) => {
//     console.log(response.data);
//     alert('Piece was successfully created!');
//   })
//   .catch(err => {
//     console.log("Could not add piece.", err);
//   });


        // axios
        //     .get('http://localhost:3000/addpieces')
        //     .then((response) => {console.log(response)})
        //     .catch(function (error) {
        //       console.log(error.toJSON());
        //     });
        //   .then(alert('Piece was successfully created!'))
        //   .catch(err => console.log("Could not add piece."))
        //fetch? 
      

      return (
        <div>
          <Navbar/>
          <h1>Some plus icon?</h1>
          <form className="cf" onSubmit={savePiece} action="/addpieces">
            <div className="half left cf">
              <input type="text" id="input-composer" onChange={handleInput} name="composer" value={piece.composer} placeholder="Composer Name" />
              <input type="text" id="input-title" onChange={handleInput} name="piece_name" value={piece.piece_name} placeholder="Title of Piece" />
              <input type="text" id="input-date" onChange={handleInput} name="starting_date" value={piece.starting_date} placeholder="Starting Date" />
            </div>  
              <div className="half right cf">
              <textarea type="text" id="input-message" onChange={handleInput} name="additional_thoughts" value={piece.additional_thoughts} placeholder="Additional Thoughts" /> 
              </div>     
              {/* need to create a route that tells what to do when we get to students */}
            <input type="submit" value="Add Piece" id="input-submit" />
          </form>
        </div>
      );
      }

export default AddPiece; 


//onchange -> handles when text is typed into the formtry{
          //   if(!data.composer || !data.piece_name || !data.starting_date || !data.additional_thoughts){
          //     throw new Error ('Error!');
          //   } else {
          //     console.log(data);
          //     return alert('Piece added successfully!');
          //   }
          // }
          // catch(error){
          //     if (error.response || error.request){
          //       console.log('Axios post error!')
          //     }
          // };