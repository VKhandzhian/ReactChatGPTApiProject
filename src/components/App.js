import { useState } from 'react';

import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Input.css';

import sendQuestionToChatGPT from '../services/chatGPT.service';

const App = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const enterQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const questionHandler = async () => {
        setAnswer(await sendQuestionToChatGPT(question));    
    }

    return (
      <body>
        <div>
          <label className='question-answer-label' htmlFor='question'>Question:</label>
          <div>
            <textarea className='question-answer-textarea' id='question' name='question' rows='5' cols='33' onChange={enterQuestion}/>
          </div>
          <div>
            <button className='question-button' onClick={questionHandler}>Ask</button>
          </div>
        </div>
        <div>
          <label className='question-answer-label' htmlFor='answer'>Answer:</label>
          <div>
            <textarea className='question-answer-textarea' disabled='yes' readOnly='yes' id='answer' name='answer' rows='5' cols='33' value={answer}/>
          </div>
        </div>
      </body>
    );
}

export default App;
