
import React, { Component } from 'react'
import Modal from 'react-modal'

Modal.setAppElement("#root");
export default class modal extends Component {
constructor (props){
super(props)
this.state={
    modalIsOpen:false,
addMovie:[{rate:"",title:'',descrip:"",img:""}]
}
}
openModal = () => this.setState({ modalIsOpen: true });
closeModal = () => this.setState({ modalIsOpen: false });
handleChange=e=>{
    this.setState({
        addMovie:{... this.state.addMovie,[e.target.name]:(e.target.value)}
    })
}

addMovies=(e)=>{
    e.preventDefault();
    this.props.addNewMovie(this.state.addMovie);
    this.setState({
        modalIsOpen: false,
        newMovie: {
          title: "",
          descrip: "",
          img: "",
          rate: 0
        }
      })
    }

    render() {
        return (
            <div>
                    <p className="ajout" ><i class="fas fa-plus fa-5x" onClick={this.openModal} ></i></p>
 <Modal isOpen={this.state. modalIsOpen}
        onRequestClose={this.closeModal} className="addModal">
            
          <form onSubmit={this.addMovies} className='formModal' >
          <h2>Add a Movie</h2>
            <label >Movie Name</label>
            <input type="text" name="title" placeholder="title..."onChange={this.handleChange} />
            <label>Movie Rate</label>
            <select name="rate" onChange={this.handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
              
            <label>Movie description</label>
            <textarea  type="text" name="descrip" placeholder="description..." onChange={this.handleChange}/>
            <label>Movie Image</label>
            <input type="url" name="img" placeholder="URL..." onChange={this.handleChange} />

    <div>
        <button  >add</button>
        <button onClick={this.closeModal}>close</button></div>
    </form>
 </Modal>
            </div>
        )
    }
}


