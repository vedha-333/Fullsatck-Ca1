import React from 'react';
import TestimonialCard from './component/TestimonialCard';
import './App.css';

function App() {
  const testimonials = [
    { id: 1, name: "John", review: "This service was amazing! Highly recommended." },
    { id: 2, name: "Jane", review: "This service was amazing! Highly not recommended." }
  ];

  return (
    <div>
      {testimonials.map((item) => (
        <TestimonialCard key={item.id} name={item.name} review={item.review} />
      ))}
    </div>
  );
}

export default App;
