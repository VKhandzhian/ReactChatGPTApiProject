import requestConstants from '../constants/request.constant'

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
    }

    const response = await fetch(requestConstants.apis.CHAT_GPT_API, {
        method: requestConstants.methods.POST,
        headers: {
          'Authorization': 'Bearer ' + process.env.REACT_APP_CHAT_GPT_API_KEY,
          'Content-Type': requestConstants.contentTypes.APP_JSON,
        },
        body: JSON.stringify(payload),
    });
  
    return response.json();
} 

export default sendQuestionToChatGPT;