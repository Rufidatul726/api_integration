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
        'X-RapidAPI-Key': 'b211884dd3mshbc0fe449b4e2d29p1d9af8jsn54626dbd1398',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};