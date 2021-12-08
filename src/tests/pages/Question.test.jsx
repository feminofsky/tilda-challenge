
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Question from "../../pages/Question"

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));



describe('<Question>', () => {

 it('render Question', async () => {
  const props = {
    quizName:  'quiz name',
    question: { id: 'question_id', text: 'question text', answer: 'questions_answer'},
    options: ['option 1', 'option 2', 'wrong answer', 'questions answer'],
    selectedOption: 'wrong_answer',
    setSelectedOption: jest.fn(),
    handleNext: jest.fn(),
    isLastQuestion: false
  }
 
  render(  
    <Question {...props} />
  )

   expect(screen.getByText(/quiz name/i)).toBeInTheDocument()
   expect(screen.getByText(/question text/i)).toBeInTheDocument()
   expect(screen.getByText(/option 1/i)).toBeInTheDocument()
   expect(screen.getByText(/option 2/i)).toBeInTheDocument()
   expect(screen.getByText(/wrong answer/i)).toBeInTheDocument()
   expect(screen.getByText(/questions answer/i)).toBeInTheDocument()
   const backButton = screen.getByRole('button', { name: /back/i })
   const nextButton = screen.getByRole('button', { name: /next/i })
   expect(backButton).toBeInTheDocument()
   expect(nextButton).toBeInTheDocument()
   userEvent.click(backButton)
   userEvent.click(nextButton)
   expect(mockedUsedNavigate).toBeCalledTimes(1)
   expect(props.handleNext).toBeCalledTimes(1)
 })


 it('render last question', async () => {
  const props = {
    quizName:  'quiz name',
    question: { id: 'question_id', text: 'question text', answer: 'questions_answer'},
    options: ['option 1', 'option 2', 'wrong answer', 'questions answer'],
    selectedOption: 'wrong_answer',
    setSelectedOption: jest.fn(),
    handleNext: jest.fn(),
    isLastQuestion: true
  }
 
  render(  
    <Question {...props} />
  )

   expect(screen.getByText(/quiz name/i)).toBeInTheDocument()
   expect(screen.getByText(/question text/i)).toBeInTheDocument()
   expect(screen.getByText(/option 1/i)).toBeInTheDocument()
   expect(screen.getByText(/option 2/i)).toBeInTheDocument()
   expect(screen.getByText(/wrong answer/i)).toBeInTheDocument()
   expect(screen.getByText(/questions answer/i)).toBeInTheDocument()
   expect(screen.getByText(/finish/i)).toBeInTheDocument()
   const finishButton = screen.getByRole('button', { name: /finish/i })
   expect(finishButton).toBeInTheDocument()
   userEvent.click(finishButton)
 })

})