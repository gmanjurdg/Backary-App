import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div id="container">
        <header>
          <nav>
            <ul>
              <li><a href="">Menu</a></li>
              <li><a href="">News</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
          <h1><img src="https://res.cloudinary.com/dnodjl7rw/image/upload/v1551237313/bgb_logo.png" alt="" /></h1>
          <p>The delicious baked goods you love at Black Goose Bistro...now available to go!</p>
        </header>

        <main>
          <h2>Fresh from the Oven</h2>
          <h3>Breads</h3>
          <p><img src="https://res.cloudinary.com/dnodjl7rw/image/upload/v1551237313/bread.png" alt="round loaf of bread on cutting board" /> Our breads are made daily from highest-quality <span class="linelength"> whole grain flour, water, </span>salt, and yeast or sourdough starter. Simply and naturally, and never any preservatives. Patience is key to achieving the proper level of fermentation and baking each loaf to perfection. Available in whole grain, sourdough, olive loaf, classic rye, and potato-onion.</p>
          <p class="more"><a href="">Learn more about our baking process...</a></p>

          <h3>Muffins</h3>
          <p><img src="https://res.cloudinary.com/dnodjl7rw/image/upload/v1551237313/muffin.png" alt="one chocolate chip muffin" /> Every day, we offer a large selection of muffins, including blueberry, multi-berry, bran, corn, lemon-poppyseed, and chocolate. Our muffins are made from scratch each day. Stop by to see our seasonal muffin flavors!</p>
          <p class="more"><a href="">Learn more about how we make our muffins...</a></p>
        </main>

        <aside>
          <h2>Hours</h2>
          <p><span class="day">Monday:</span> 5am to 3pm</p>
          <p><span class="day">Tuesday:</span> 5am to 3pm</p>
          <p><span class="day">Wednesday:</span> 5am to 3pm</p>
          <p><span class="day">Thursday:</span> 5am to 3pm</p>
          <p><span class="day">Friday:</span> 5am to 3pm</p>
          <p><span class="day">Saturday:</span> 6am to 4pm</p>
          <p><span class="day">Sunday:</span> 6am to 4pm</p>
        </aside>

        <footer>
          <p>All content copyright © 2017, Black Goose Bistro.</p>
          <div id="award">
            <img src="https://res.cloudinary.com/dnodjl7rw/image/upload/v1551237313/award.png" alt="Farmers' Market Award" />
          </div>
        </footer>
      </div>
    
  );
}

export default App;
