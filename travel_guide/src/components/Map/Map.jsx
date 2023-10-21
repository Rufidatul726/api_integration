import React, { useEffect } from 'react'
import { ReactBingmaps } from 'react-bingmaps';
import useStyles from './styles.js'

const Map = ({  setCoordinates,  setBounds,  coordinates}) => {
  const classes = useStyles()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude })
      setBounds({ ne: { lat: latitude + 0.02, lng: longitude + 0.02 }, sw: { lat: latitude - 0.02, lng: longitude - 0.02 } })
    })
  }, [setCoordinates, setBounds])

  return (
    <div className={classes.mapContainer}>
      <ReactBingmaps
        bingmapKey={process.env.REACT_APP_BING_MAPS_API_KEY}
        center={[coordinates.lat, coordinates.lng]}
        zoom={12}
        mapTypeId={"road"}
        navigationBarMode={"compact"}
        supportedMapTypes={["road"]}
        heading={180}
        pushPins={[
          {
            "location":[coordinates.lat, coordinates.lng],
            "option": { color: 'red' },
            "addHandler": {"type" : "click", callback: (e) => {console.log(e)}}
          }
        ]}
        polyline={{
          "location":[[0, 0],[13.7563, 100.5018]],
          "option": { strokeColor: 'red', strokeThickness: 2 }
        }}
        >
      </ReactBingmaps>
    </div>
  )
}

export default Map

