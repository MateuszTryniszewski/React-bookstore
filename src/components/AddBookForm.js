import React from 'react';

class AddBookForm extends React.Component {
    
    constructor () {
        super();
        this.state = {
          
            book : {
                name : '',
                author: '',
                description: '',
                onStock: false,
                image: '',
                genre: ''
            }
        }
    }
 

  
addNewBook = (event) =>{
    event.preventDefault();
    let newBook = {...this.state.book};
    
   this.props.addNewBook(newBook);
    
    this.setState({
       
        book : {
                name : '',
                author: '',
                description: '',
                onStock: false,
                image: ''
            }
    });
    document.getElementById('alert').innerHTML = "<h3>the book has been added<h3>"
}
    
handleChange = (event) =>{
    
   
    let newBook;
        if(event.target.name==="onStock"){
            newBook = {
                ...this.state.book,
                [event.target.name] : event.target.checked
            }
         } else {
            newBook = {
                ...this.state.book,
                [event.target.name] : event.target.value
            }
         }
            this.setState({
                book: newBook
            })    
    }
    
    
    render() {
        return(
         <div className="adminPanel col-md-4 ">
            <h4>Admin Panel</h4>
            <div id="alert"></div>
            <form onSubmit ={this.addNewBook}>
                <div className="form-group">
                    <input type="text" placeholder="book name" id="name" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="book Author" id="author" name="author"  onChange={this.handleChange} className="form-control" value={this.state.book.author}/>
                </div>
                <div className="form-group">
                    <textarea placeholder="Book Description" id="description" name="description" onChange={this.handleChange} className="form-control" value={this.state.book.description}/>
                </div>
                <div class="form-group">
                    <label htmlfor="genre">book genre</label>
                     <select className="form-control" id="genre" name="genre" onChange={this.handleChange}  value={this.state.book.description}>
                         <option>Fantasy</option>
                         <option>Adventure</option>
                         <option>Science fiction</option>
                         <option>Horror</option>
                         <option>Satire</option>
                     </select>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="onStock" name="onStock" onChange={this.handleChange} className="form-check-input" value={this.state.book.onStock}/>
                    <label htmlFor="onStock" className="form-check-label"> On stock </label>
                </div>
                <div className="form-group">
                    <input type="file" placeholder="book image" id="image" name="image" onChange={this.handleChange} className="form-control-file" value={this.state.book.image}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        )
    }
}
export default AddBookForm;