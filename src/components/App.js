import { useState } from 'react';

import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Input.css';

import sendQuestionToChatGPT from '../services/chatGPT.service';

import Textarea from './Textarea/Textarea';
import Label from './Label/Label';
import Button from './Button/Button';
import textareaSizes from '../constants/textarea.constant';

const App = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [answerAreaSize, setAnswerAreaSize] = useState({rows: textareaSizes.MIN_ROW_NUMBER, columns: textareaSizes.MIN_COLUMN_NUMBER});

    const enterQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const questionHandler = async () => {
        const responseFromChatGPT = await sendQuestionToChatGPT(question);
        const currentAnswerAreaSize = answerAreaSize.rows * answerAreaSize.columns;    
    
        if (currentAnswerAreaSize < responseFromChatGPT.length) {
            const newColumnNumber = responseFromChatGPT.length / answerAreaSize.rows;

            if (newColumnNumber > textareaSizes.MAX_COLUMN_NUMBER) {
                const newRowNumber = responseFromChatGPT.length / textareaSizes.MAX_COLUMN_NUMBER;
                setAnswerAreaSize({rows: newRowNumber, columns: textareaSizes.MAX_COLUMN_NUMBER});
            } else {
                setAnswerAreaSize(prevSize => { return {...prevSize, columns: newColumnNumber}; });
            }
        }

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
                      rows={answerAreaSize.rows} 
                      cols={answerAreaSize.columns}
                      value={answer} 
                      />
              </div>
          </div>
      </body>
    );
}

export default App;
