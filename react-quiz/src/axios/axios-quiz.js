import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-eebdb.firebaseio.com/'
});