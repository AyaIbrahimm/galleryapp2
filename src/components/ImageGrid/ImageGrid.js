
  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';


import { loadImages } from '../../actions';
import './style.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, loadImages, error } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(images => (
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