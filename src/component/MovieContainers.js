import React, { Component } from 'react'
import {movies} from './data';
import Search from './search';
import Rating from './Rating';
import Modale from './modal'


export default class MovieContainers extends Component {
    constructor(props) {
        super(props)
    this.state={
         movies,
     
        recherche:"",
        stars:0
       
    }
    //methode pour tester si addNewMovie ajoute reelement un film
    // setTimeout(
    //     () => {
    //       this.addNewMovie({rating:"3",
    //       title:"Spider",
    //       descripton:"Inception is a 2010 psychological science fiction action film[3] written and directed by Christopher Nolan",
    //       img:"https://m.media-amazon.com/images/M/MV5BMmY4OGRmNWMtNmIyNS00YWQ5LWJmMGUtMDI3MWRlMmQ0ZDQzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    //       )
    //     },
    //     5000)
    }

    // search
     handleChange = e=>{
     this.setState({
         recherche : e
         })
     }
  //add new movie
   addNewMovie=(newMovie) =>{
    
    this.setState({
        movies: [...this.state.movies, newMovie]
    })
    
  }
   //rating
   handleRating = rate => this.setState({ stars: rate });
    render() {
        const movieList= this.state.movies.filter((el=>el.title.toUpperCase().includes(this.state.recherche.toUpperCase().trim())&& el.rating >= this.state.stars ))
       
        return (
      <div>
          <Search handleChange={this.handleChange} stars={this.state.stars} handleRating={this.handleRating}/>
                     <div className="card-flex">
                         {
                           movieList.map((el,i)=>
                       <div class="flip-card">
                       <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={el.img} alt="alta"/>
                            </div>
                            <div class="flip-card-back">
                            <h1>{el.title}</h1>
                            <p>{el.descripton}</p>
                            <Rating count={el.rating} />
                            
                             </div>
                            
                             </div>
                            
                                </div>
            
                             )}
                             
                             <Modale addNewMovie={this.addNewMovie}/>                  </div>
                 </div>
                 )
             }
            }
