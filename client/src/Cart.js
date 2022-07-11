import React from 'react'
import FeaturedBooks from './components/Books/FeaturedBooks';

function Cart() {
  return (
    <>
      <h2>Cart</h2>
      <div>
        put selected books here
      </div>

  <input
      fluid
      name="firstname" 
      label='First Name'
      placeholder='John'
  />
  <input 
      fluid 
      name='lastname' 
      label='Last name' 
      placeholder='Smith'
  />
  <input 
      fluid 
      name='email'
      label='Email' 
      placeholder='xyz@example.com'
      type='email'  
/> 
  <div>
    <input 
        width={10} 
        name='street' 
        label='Address' 
        placeholder='122 Example St'   
    />
    <input 
        width={6} 
        name='town_city' 
        label='Town/City' 
        placeholder='Las Vegas' 
    />
    <input
        width={4} 
        type='number'
        name='postal_zip_code' 
        label='Zip/Postal' 
        placeholder='00000'
    />
  </div>
      <FeaturedBooks />
    </>
  )
}

export default Cart;