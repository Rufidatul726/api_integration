import axios from 'axios';

const url ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlandata = async (sw,ne) => {
  try {
    const response = await axios.get(url, 
    {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};