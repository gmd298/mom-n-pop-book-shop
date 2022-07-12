import React from 'react';
import FeaturedBooks from './components/Books/FeaturedBooks';

function Home() {

  return (
    <div>
      <h1>
        Welcome! Here are this week's featured books
      </h1>
      <FeaturedBooks />
      <h3>Business Info</h3>
      <div>
        <strong>
        Hours of operation:
        </strong>
          <div>Monday-Friday 8AM-9PM</div>
          <div>Saturday and Sunday 11AM-7PM</div>
        <div><p></p>
          <strong>
            Address:
          </strong>
            <div>
              5 Penn Plaza<div>NY, NY 10001</div>
            </div>
        </div><p></p>
        <div>
          <strong>
            Phone number:
          </strong>
          <div>
            123-456-7890
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home