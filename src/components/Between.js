import React from 'react'

const Between = () => {
  return (
    <div className='between'>
      <p className='categories'>
        <span>
          Following categories are being displayed: <strong>Burglary</strong>{' '}
        </span>
        <img
          src='https://img.icons8.com/fluent/20/000000/crowbar.png'
          alt='crowbar'
        />
        <span>
          ,<strong> drugs </strong>
        </span>
        <img
          src='https://img.icons8.com/pastel-glyph/20/000000/syringe--v3.png'
          alt='syringe'
        />
        <span>
          ,<strong> possession of weapons </strong>
        </span>
        <img
          src='https://img.icons8.com/officel/16/000000/crime.png'
          alt='gun'
        />
        <span>
          ,<strong> violent crimes </strong>
        </span>
        <img
          src='https://img.icons8.com/fluent-systems-regular/20/000000/sparring.png'
          alt='violent-crime'
        />
        .
      </p>
    </div>
  )
}

export default Between
