import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

export const gun = new Icon({
  iconUrl: '/gun.png',
  iconSize: [50, 50],
})

const Gun = ({ crimes }) => {
  return (
    <>
      {crimes.map(
        (crime) =>
          crime.category === 'possession-of-weapons' && (
            <Marker
              key={crime.id}
              position={[crime.location.latitude, crime.location.longitude]}
              icon={gun}
            />
          )
      )}
    </>
  )
}

export default Gun
