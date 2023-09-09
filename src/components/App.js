import { useState } from 'react';

import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Input.css';

import sendQuestionToChatGPT from '../services/chatGPT.service';

import getNewTextareaSize from '../utils/resizeTextArea.util';

import textareaSizes from '../constants/textarea.constant';

import Textarea from './Textarea/Textarea';
import Label from './Label/Label';
import Button from './Button/Button';

const App = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [answerAreaSize, setAnswerAreaSize] = useState({rows: textareaSizes.MIN_ROW_NUMBER, columns: textareaSizes.MIN_COLUMN_NUMBER});

    const enterQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const questionHandler = async () => {
        const responseFromChatGPT = await sendQuestionToChatGPT(question);
        const resizedTextArea = getNewTextareaSize(answerAreaSize, responseFromChatGPT);

        setAnswerAreaSize(resizedTextArea);
        setAnswer(responseFromChatGPT);    
    }

    return (
      <body>
          <div>
              <Label className='question-answer-label' htmlFor='question' value='Question:' />
              <div>
                  <Textarea 
                      className='question-answer-textarea' 
                      id='question' 
                      name='question' 
                      rows='5' 
                      cols='33' 
                      onChange={enterQuestion} 
                      />
              </div>
              <div>
                  <Button 
                      className='question-button' 
                      name='Ask'
                      onClick={questionHandler}
                      />
              </div>
          </div>
          <div>
              <Label className='question-answer-label' htmlFor='answer' value='Answer:' />
              <div>
                  <Textarea 
                      className='question-answer-textarea' 
                      isDisabled={true}
                      isReadOnly={true} 
                      id='answer' 
                      name='answer' 
                      rows={answerAreaSize.rows.toString()} 
                      cols={answerAreaSize.columns.toString()}
                      value={answer} 
                      />
              </div>
          </div>
      </body>
    );
}

export default App;
