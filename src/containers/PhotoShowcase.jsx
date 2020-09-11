import React, { Component } from 'react';
import '../styles/PhotoShowcase.scss';
import Lightbox from '@zhyabs1314/react-image-lightbox';
import '@zhyabs1314/react-image-lightbox/style.css'; 
import Pagination from '../components/Pagination.jsx';

export default class PhotoShowcase extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            pageOfItems: [],
            images: [],
            currentPage:'',
        }
    }

    onChangePage = (pageOfItems, pager) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems, currentPage: pager.currentPage });
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    callAPI() {
        const url = `https://api.500px.com/v1/photos?feature=popular&consumer_key=${process.env.REACT_APP_500PX_API_KEY}`;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + url, {
            method: 'GET',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' 
            },
        })
        .then(res => res.json())
        .then(res => {
            this.setState({ 
                images: res.photos
            })
        })
        .catch(err => {
            console.log('This is error' + err )
        })
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;            
        return (                                     
            <div className="all-photos-container">
                <h1>Simple Photo Showcase using 500px API</h1>
                <Pagination 
                    items={images} 
                    onChangePage={this.onChangePage}
                    currentPage={this.state.currentPage}                                 
                />
                <div className="all-photos">                                       
                    {this.state.pageOfItems.map((image, i) =>                            
                        <div className="each-image" key={image.id}>
                            <a 
                                href={image.image_url} 
                                onClick={(event) => {event.preventDefault()}}
                            >
                                {this.state.currentPage === 1 ? 
                                    (<img 
                                        src={image.image_url} 
                                        alt={image.name}
                                        onClick={(e) => this.setState({ isOpen: true, photoIndex: i })}
                                    />)
                                    :
                                    (null)
                                }
                                {this.state.currentPage === 2 ? 
                                    (<img 
                                        src={image.image_url} 
                                        alt={image.name}
                                        onClick={(e) => this.setState({ isOpen: true, photoIndex: i+10 })}
                                    />)
                                    :
                                    (null)
                                }
                                {this.state.currentPage === 3 ? 
                                    (<img 
                                        src={image.image_url} 
                                        alt={image.name}
                                        onClick={(e) => this.setState({ isOpen: true, photoIndex: i+20 })}
                                    />)
                                    :
                                    (null)
                                }
                                {this.state.currentPage === 4 ? 
                                    (<img 
                                        src={image.image_url} 
                                        alt={image.name}
                                        onClick={(e) => this.setState({ isOpen: true, photoIndex: i+30 })}
                                    />)
                                    :
                                    (null)
                                }
                                {this.state.currentPage === 5 ? 
                                    (<img 
                                        src={image.image_url} 
                                        alt={image.name}
                                        onClick={(e) => this.setState({ isOpen: true, photoIndex: i+40 })}
                                    />)
                                    :
                                    (null)
                                }
                            </a>
                        </div>
                    )}                        

                    {isOpen && (
                        <Lightbox
                            mainSrc={(images[photoIndex] || []).image_url}
                            nextSrc={((images[(photoIndex + 1) % images.length]) || []).image_url}
                            prevSrc={((images[(photoIndex + images.length - 1) % images.length]) || []).image_url}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                            imageTitle={((images[photoIndex] || []).name) || null}
                            imageCaption={((images[photoIndex] || []).description) || null}
                        />
                    )}
                </div>
                <Pagination 
                    items={images} 
                    onChangePage={this.onChangePage}  
                    currentPage={this.state.currentPage}                             
                />
            </div>
        )
    }
}