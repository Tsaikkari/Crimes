import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

export const burglary = new Icon({
  iconUrl: '/crowbar.png',
  iconSize: [50, 50],
  className: 'burglary-icon',
})

const Burglary = ({ crimes }) => {
  return (
    <>
      {crimes && crimes.map(
        (crime) =>
          crime.category === 'burglary' && (
            <Marker
              key={crime.id}
              position={[crime.location.latitude, crime.location.longitude]}
              icon={burglary}
            />
          )
      )}
    </>
  )
}

export default Burglary
