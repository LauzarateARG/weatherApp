import axios from "axios";

export function getCurrentCity(city) {
  return async function (dispath) {
    let apikey = process.env.REACT_APP_API_KEY;
    var json = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    try {
      return dispath({
        type: "GET_CURRENT_CITY",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCities(payload) {
  console.log("cidad antigua",payload)
    return {
      type: "GET_CITIES",
      payload,
  };
}
