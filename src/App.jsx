
import React from 'react'
import TestimonialCard from './component/TestimonialCard'
import './App.css'
const  testimonial = [
{id:1,
name:"John",
"Review-Test" :"This service was amazing! Highly recommended."
},{
id:2,
name:"Jane",
"Review-Test" :"This service was amazing! Highly not recommended."}
]

function App() {

  return(<>{
   testimonial.map((items)=>{
    <TestimonialCard key={items.id} items={name} />;
   })
  }</>)
}

export default App
