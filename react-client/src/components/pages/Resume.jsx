import React, { Component } from 'react';
import PDF from 'react-pdf-js-infinite';

class Resume extends React.Component {
  render() { 
    return (
      <div id="resume">
        <PDF file='https://s3.amazonaws.com/matthewtrahan-personal-site/resume/MatthewTrahanResumePDF.pdf' scale={1.5} />
      </div>
    );
  }
}

export default Resume;
