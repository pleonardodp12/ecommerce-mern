import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-4">
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
