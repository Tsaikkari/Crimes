import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'

import ViolentCrime from '../components/ViolentCrime'
import Drugs from '../components/Drugs'
import Gun from '../components/Gun'
import Burglary from '../components/Burglary'
import Between from '../components/Between'
import Loader from '../components/Loader'
import {
  getManchesterCrimesRequest,
  getMacclesfieldCrimesRequest,
} from '../redux/actions/crimes'

const MapPage = () => {
  const crimes = useSelector((state) => state.crimes)
  const { manchesterCrimes, macclesfieldCrimes, loading } = crimes

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getManchesterCrimesRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getMacclesfieldCrimesRequest())
  }, [dispatch])

  return (
    <>
      {loading && <Loader />}
      <Map center={[53.48, -2.21]} zoom={13}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {manchesterCrimes && (
          <>
            <Burglary crimes={manchesterCrimes} />
            <Gun crimes={manchesterCrimes} />
            <ViolentCrime crimes={manchesterCrimes} />
            <Drugs crimes={manchesterCrimes} />
          </>
        )}
      </Map>
      <Between />
      <Map center={[53.253, -2.14]} zoom={13}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {macclesfieldCrimes && (
          <>
            <Burglary crimes={macclesfieldCrimes} />
            <Gun crimes={macclesfieldCrimes} />
            <Drugs crimes={macclesfieldCrimes} />
            <ViolentCrime crimes={macclesfieldCrimes} />
          </>
        )}
      </Map>
      <a href='https://icons8.com/icon/t_8ZaOFbra3N/crime'>
        Crime icon by Icons8
      </a>
      <a href='https://icons8.com/icon/xq5bOSE025FL/syringe'>
        Syringe icon by Icons8
      </a>
      <a href='https://icons8.com/icon/8s0wuoz7Ncf4/crowbar'>
        Crowbar icon by Icons8
      </a>
      <a href='https://icons8.com/icon/baoefpVUmsHv/fight'>
        Fight icon by Icons8
      </a>
    </>
  )
}

export default MapPage
