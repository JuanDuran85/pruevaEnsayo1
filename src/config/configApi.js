import axios from 'axios';
import store from '../store/index';

var api_key = 'dc3f54bc039eb540d6014f07626bfa0b';

export function conexionApi() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json`)
        .then(response => {
          console.log(response.data.artists.artist);
          store.dispatch('infoApi',response.data.artists.artist);
        })
        .catch(error => console.error(error))
}
