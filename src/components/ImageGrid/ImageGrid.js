
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';


import { loadImages } from '../../actions';
import './style.css';

class ImageGrid extends Component {
    constructor(props){
        super(props)
        this.state={
            search:''
        }

    }
    componentDidMount() {
        this.props.loadImages();
    }
    updateSeacrh(event) {
        this.setState({search: event.target.value})    }
    

    render() {
        const { isLoading, images, loadImages, error } = this.props;
        var filteredimages= this.props.images 
        
        if(this.props.images.length==0){
            console.log("fady")
        }
        else{
            
            
        filteredimages = this.props.images.filter((photo) =>{
               const lc= photo.author.toLowerCase()
               return lc.includes(this.state.search.toLowerCase())
           })
            
        

     
console.log(filteredimages)

        
    }
     
        
        return (
            <div className="content">
                 <form onSubmit={this.onFormSubmit}  className="flexContainer">
                    <label><h2>Search </h2></label>
                    <input
                        className="inputStyle"
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSeacrh.bind(this)}
                    />
                </form>
                <section className="grid">
                    {filteredimages.map(images => (
                        <div
                            key={images.id}
                            className={`item item-${Math.ceil(
                                images.height / images.width,
                            )}`}
                        >
                            <figure>
                            <img
                                src={images.download_url}
                                
                                
                            />
    <figcaption>{images.author}</figcaption>
                            </figure>
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
               
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
    
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);