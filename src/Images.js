import React from 'react'

function Images() {
  return (
    <>
      <section>
        <ul>
          <li>
            <img
              src={require('./images/IMG_2911.JPEG')}
              alt="hala zieleń"
              width={500}
            ></img>
            <p>Wybierz rozmiar</p>
            <ul>
              <li>
                choose s <button>choose s</button>
              </li>
              <li>
                <button>choose m</button>
              </li>
              <li>
                <button>choose l </button>
              </li>
            </ul>
          </li>
          <li>
            <img
              src={require('./images/IMG_2910.JPEG')}
              alt="hala fiolet"
              width={500}
            ></img>
          </li>
        </ul>
        <ul>
          <img
            src={require('./images/IMG_2722.JPEG')}
            alt="hala fiolet"
            width={500}
          ></img>
          <li>
            <img
              src={require('./images/IMG_2941.JPEG')}
              alt="hala zieleń"
              width={500}
            ></img>
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={require('./images/IMG_3100.JPEG')}
              alt="hala zieleń"
              width={500}
            ></img>
            Image1
          </li>
          <li>
            <img
              src={require('./images/IMG_3160.JPEG')}
              alt="hala zieleń"
              width={500}
            ></img>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Images
