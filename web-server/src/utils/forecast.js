const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4493577f08ec42caf2aeccd7188fb848&query='+latitude+','+longitude+'&units=f';

    request({ url, json: true }, (error, { body }={}) => {
        //console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            // console.log(body)
            callback('Unable to find location', undefined)
        } else {
            $result = body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain. with UV index:' +body.current.uv_index;
            $result += '<br> Location Detials ' + body.location.timezone_id + ' Observation time :' + body.current.observation_time ;
            callback(undefined, $result)
        }
    })
}

module.exports = forecast