import './App.css';
import React from 'react';
import PDFFile from './components/PDFFile';
import XMLParser from './components/XMLCnv';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = ()  => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      { <XMLParser /> }
    </div>
  );
}

export default App;