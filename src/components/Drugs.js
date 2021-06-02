import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

export const drugs = new Icon({
  iconUrl: '/syringe.png',
  iconSize: [20, 20],
  className: 'drugs-icon',
})

const Drugs = ({ crimes }) => {
  return (
    <>
      {crimes.map(
        (crime) =>
          crime.category === 'drugs' && (
            <Marker
              key={crime.id}
              position={[crime.location.latitude, crime.location.longitude]}
              icon={drugs}
            />
          )
      )}
    </>
  )
}

export default Drugs
