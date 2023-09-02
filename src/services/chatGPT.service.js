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

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + process.env.REACT_APP_CHAT_GPT_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
  
    return response.json();
} 

export default sendQuestionToChatGPT;