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
          <li>Image3</li>
        </ul>
        <ul>
          <li>Image1</li>
          <li>Image1</li>
        </ul>
      </section>
    </>
  )
}

export default Images
