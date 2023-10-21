import React from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { Header, List, Map } from './components'
import { getPlandata } from './api'

const App = () => {
  const [places, setPlaces] = React.useState([])
  const [coordinates, setCoordinates] = React.useState({})
  const [bounds, setBounds] = React.useState(null)

  React.useEffect(() => {
    if (bounds) {
      getPlandata(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data)
      })
    }
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App