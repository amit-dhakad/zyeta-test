import React, { Component } from 'react';
import ImageViewer from '../details/ImageViewer';
import './home.css';
class Home extends Component {
  render() {
    const style = { width: '300px', padding: '15px' };
    return (
      <div className="home">
        <h3>title</h3>

        <h4>Date</h4>

        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          style={style}
          link="true"
          linkto="details"
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          link="true"
          style={style}
          linkto="details"
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          style={style}
          link="true"
          linkto="details"
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          style={style}
          link="true"
          linkto="details"
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          style={style}
          link="true"
          linkto="details"
        />
        <ImageViewer
          src="image.jpg"
          alt="img1"
          style={style}
          link="true"
          linkto="details"
        />
      </div>
    );
  }
}

export default Home;
