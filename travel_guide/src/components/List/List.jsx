import React, { useEffect } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import useStyles from './styles.js'
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx'

const List = ({ places }) => {
  const classes = useStyles()
  const [type, setType] = React.useState('restaurants')
  const [rating, setRating] = React.useState(0)
  const [onPlaceData, setOnPlaceData] = React.useState(false)

  useEffect(() => {
    const placeData = places.data;
    console.log(placeData)
    if (placeData) {
      setOnPlaceData(true)
    }
  } , [places])

  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl} >
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {onPlaceData ? places.data.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        )) : <CircularProgress />}
      </Grid>
    </div>
  )
}

export default List
