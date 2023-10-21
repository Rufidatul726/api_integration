import React from 'react'

const PlaceDetails = ({place}) => {
  console.log(place)
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  )
}

export default PlaceDetails
