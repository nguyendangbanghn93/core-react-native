import axios from 'axios';
import youtubeApiConfigs from '~configs/youtubeApi.configs';
axios.defaults.baseURL = youtubeApiConfigs.baseUrl;
axios.defaults.params = {key: youtubeApiConfigs.apiKey};
