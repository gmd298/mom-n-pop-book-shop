import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FeaturedBooks from './components/Books/FeaturedBooks';
import { clearCart, removeBook } from './slices/cart';

function Cart() {
  const dispatch = useDispatch()

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')

  const cartBooks = useSelector(state => state.cart.cartBooks)

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/customers', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        address,
        city,
        zip,
      })
    }).then((r) => {
      console.log(r)
      setFirstName('')
      setLastName('')
      setEmail('') 
      setAddress('') 
      setCity('')
      setZip('') 
      dispatch(clearCart())
    })
  }

  const onRemove = (id) => {
    dispatch(removeBook(id))
  }

  // Need a button to remove the book from the list

  return (
    <>
      <h2>Cart</h2>
      <div>
        {Object.values(cartBooks).map(({ book, quantity }) => {
          return <div>
            <div>Name: {book.title}</div>
            <div>Quantity: {quantity}</div>
            <div><button onClick={() => onRemove(book.id)} type="button">Remove</button></div>
          </div>
        })}
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        <input
          fluid
          name="firstname" 
          label='First Name'
          placeholder='John'
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          fluid
          name='lastname' 
          label='Last name' 
          placeholder='Smith'
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input 
          fluid 
          name='email'
          label='Email' 
          placeholder='xyz@example.com'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> 
        <div>
          <input 
            width={10} 
            name='street' 
            label='Address' 
            placeholder='122 Example St'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input 
            width={6} 
            name='town_city' 
            label='Town/City' 
            placeholder='Las Vegas' 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            width={4} 
            type='number'
            name='postal_zip_code' 
            label='Zip/Postal' 
            placeholder='00000'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
      <FeaturedBooks />
    </>
  )
}

export default Cart;