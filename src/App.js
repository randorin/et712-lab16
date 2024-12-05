import './App.css';
import { useState } from 'react';

function App() {
  //OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  //Function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
    <h1>Betsy Zhang</h1>
      <div className='info'>
        <p><b>Cat (Felis catus)</b>, commonly referred to as the domestic pet or house cat</p>
        <button className='readmorebtn' onClick={openreadmore}>{isOpen ? "Hide" : "Read More"}</button>
      </div>
      <section>
        {
          isOpen &&
        <div className='readmore'>
          <p>
          As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated 220 million owned and 480 million stray cats in the world.
          </p>
        </div>
        }
      </section>

      <form>
        <fieldset>
          <legend>
            <label for="username">Enter a name: </label>
              <input type='text' id='username' placeholder='Type your name'/>
          </legend>
        </fieldset>
      </form>



    </div>
  );
}

export default App;