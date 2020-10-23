import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-4">
          <Route to='/' exact component={HomeScreen}></Route>
          <Route to='/product/:id' component={ProductScreen}></Route>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
