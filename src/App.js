import React from 'react';
import Hello from './Hello';
import Bomb from './Bomb'
import RouletteGun from './RouletteGun';
import Accordion from './Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <div className="App">
      <Hello />
      <Bomb />
      <RouletteGun />
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
