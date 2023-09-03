import axios from 'axios';

import requestConstants from '../constants/request.constant';

const sendQuestionToChatGPT = async (question) => {

    const payload = {
        'model': 'gpt-3.5-turbo',
        'temperature' : 1.0,
        'messages' : [
            { 
                'role': 'system',
                'content': question 
            }
        ]  
    };

    const answer = await axios.post(requestConstants.apis.CHAT_GPT_API, JSON.stringify(payload), {
        headers: {
            'Authorization': 'Bearer ' + process.env.REACT_APP_CHAT_GPT_API_KEY,
            'Content-Type': requestConstants.contentTypes.APP_JSON,
        }
    }).then(response => response.data.choices[0].message.content).catch(error => 'Sorry, something was happen: ' + error);

    return answer;
} 

export default sendQuestionToChatGPT;