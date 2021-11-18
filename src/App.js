// import logo from './logo.svg';
import './App.css';
import Name from './name';
import React, { useState } from 'react'

export default function App() {


  
  const [name, setName] = useState('Tarun');
  return <Name name={name} />;
}



