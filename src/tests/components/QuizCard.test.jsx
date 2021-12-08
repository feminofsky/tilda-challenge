import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import QuizCard from "../../components/QuizCard"


describe('<QuizCard>', () => {
 it('when user has not attempted the quiz', () => {
  const props = {
   title: 'Test Quiz',
   score: 0,
   totalQuestions: 0,
   startQuiz: jest.fn(),
   hasAttempt: false
  }
  render(<QuizCard  {...props} />)
  expect(screen.getByText(`${props.title}`)).toBeInTheDocument()
  expect(screen.getByText(/Not started/i)).toBeInTheDocument()
  const startButton = screen.getByRole('button', { name: /start/i })
  expect(startButton).toBeInTheDocument()
  userEvent.click(startButton)
  expect(props.startQuiz).toBeCalled()
 })

 it('when user has attempted the quiz', () => {
  const props = {
   title: 'Test Quiz',
   score: 5,
   totalQuestions: 6,
   startQuiz: jest.fn(),
   hasAttempt: true
  }
  render(<QuizCard  {...props} />)
  expect(screen.getByText(`${props.title}`)).toBeInTheDocument()
  expect(screen.getByText(`Score: ${props.score}/${props.totalQuestions}`)).toBeInTheDocument()
  const redoButton = screen.getByRole('button', { name: /Redo/i })
  expect(redoButton).toBeInTheDocument()
  userEvent.click(redoButton)
  expect(props.startQuiz).toBeCalled()
 })
})
