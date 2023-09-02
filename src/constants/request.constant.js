const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const contentTypes = {
    APP_JSON: 'application/json'
};

const apis = {
    CHAT_GPT_API: 'https://api.openai.com/v1/chat/completions'
};

const requestConstants = { methods, contentTypes, apis };

export default requestConstants;