import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ChartCrime from '../components/ChartCrime'
import ChartTeam from '../components/ChartTeam'
import Between from '../components/Between'
import { getManchesterTeamRequest, getMacclesfieldTeamRequest } from '../redux/actions/teams'

const ChartPage = () => {
  const manchester = useSelector((state) => state.crimes.manchesterCrimes)
  const macclesfield = useSelector((state) => state.crimes.macclesfieldCrimes)
  const manchesterTeam = useSelector((state) => state.teams.manchesterTeam)
  const macclesfieldTeam = useSelector((state) => state.teams.macclesfieldTeam)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getManchesterTeamRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getMacclesfieldTeamRequest())
  }, [dispatch])

  const crimeOccurances = (array, cat) => {
    const filteredArray = array.filter((crime) => crime.category === cat)
    return filteredArray.length
  }

  const manData = [
    {
      crime: 'burglary',
      occurances: crimeOccurances(manchester, 'burglary'),
    },
    {
      crime: 'drugs',
      occurances: crimeOccurances(manchester, 'drugs'),
    },
    {
      crime: 'possession-of-weapons',
      occurances: crimeOccurances(manchester, 'possession-of-weapons'),
    },
    {
      crime: 'violent-crime',
      occurances: crimeOccurances(manchester, 'violent-crime'),
    },
  ]

  const macData = [
    {
      crime: 'burglary',
      occurances: crimeOccurances(macclesfield, 'burglary'),
    },
    {
      crime: 'drugs',
      occurances: crimeOccurances(macclesfield, 'drugs'),
    },
    {
      crime: 'possession-of-weapons',
      occurances: crimeOccurances(macclesfield, 'possession-of-weapons'),
    },
    {
      crime: 'violent-crime',
      occurances: crimeOccurances(macclesfield, 'violent-crime'),
    },
  ]

  const teamData = [
    {
      team: manchesterTeam,
      volume: manchesterTeam.length
    },
    {
      team: macclesfieldTeam,
      volume: macclesfieldTeam.length
    }
  ]

  return (
    <>
      <div className='chart-headers'>
      <p className='chart-header left'>Manchester</p>
      <p className='chart-header right'>Macclesfield</p>
      </div>
      <div className='charts-page'>
        <ChartCrime data={manData} />
        <ChartCrime data={macData} />
        <Between />
      </div>
      <h2 className='teams-chart-header'>Team size in Manchester and Macclesfield</h2>
      <ChartTeam data={teamData} />
    </>
  )
}

export default ChartPage
