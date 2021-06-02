import React from 'react'
import { Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

export const violent = new Icon({
  iconUrl: '/fight.png',
  iconSize: [25, 25],
  className: 'violent-icon',
})

const ViolentCrime = ({ crimes }) => {
  return (
    <>
      {crimes && crimes.map(
        (crime) =>
          crime.category === 'violent-crime' && (
            <Marker
              key={crime.id}
              position={[crime.location.latitude, crime.location.longitude]}
              icon={violent}
            />
          )
      )}
    </>
  )
}

export default ViolentCrime
