import React from "react";
import Rating from "./Rating"

function Search(props) {
    return (
                   <div className="searchbox-wrap">
                     <div className="inputWithIcon">
                 <input type="text" placeholder="recherche..." className="search-box"   onChange={e => props.handleChange(e.target.value)} ></input>
                <span><i class="fas fa-search "></i></span> </div>
                <span className="star"> Search with rating</span>
                <span className="rat"><Rating count={props.stars} onChangeRating={props.handleRating}/></span>
                
                    </div>
                   
                )
}
export default Search;











// import React, { Component } from 'react';
// import Rating from './Rating'


// export default class search extends Component {
//     state={
        
//         recherche:""
//     }
//     handleChange=e=>{
//         this.setState({
//     recherche: e.target.value
//         })
//     }
//      handleClick=()=>{
         
//       this.props.handleRecherche(this.state.recherche)
//         this.setState({
//              recherche:""

//          })
        
        
//        }
    
//     render() {
//         return (
//             <div className="searchbox-wrap">
//                 <input type="text" placeholder="recherche..." className="search-box"  value={this.state.recherche} onChange={this.handleChange} ></input>
            
//         <span onClick={this.handleClick}><i class="fas fa-search "></i></span>
//         <span className="star"> Search with rating</span>
//         <Rating/>
        
//             </div>
           
//         )
//     }
// }
