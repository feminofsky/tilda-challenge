
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import QuestionContainer from "../../pages/Question.container"
import { MockedProvider } from '@apollo/react-testing'
import {GetQuizByIdDocument} from '../../graphql/generated'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-router', () => ({
  useParams: () => ({ quizId: 'quiz_id', questionId: 'question_id'}),
}));

describe('<QuestionContainer>', () => {

 it('when unable to fetch quiz data', async () => {
  const mocks = [
   {
     request: {
       query: GetQuizByIdDocument,
       variables: {
        id: 'quiz_id'
       },
     },
     result: {
      errors: [ {message: 'Error!'}]
     },
   },
 ];
 
  render(  
   <MockedProvider mocks={mocks} >
      <QuestionContainer />
    </MockedProvider>
  )
  await waitFor(() => {
   expect(screen.getByText(/Oops! Error Occured while fetching quiz data/i)).toBeInTheDocument()
   const backButton = screen.getByRole('button', { name: /back/i })
   expect(backButton).toBeInTheDocument()
   userEvent.click(backButton)
   expect(mockedUsedNavigate).toBeCalled()
  })
 })

 it('when wrong question_id passed', async () => {
  const mocks = [
   {
     request: {
       query: GetQuizByIdDocument,
       variables: {
        id: 'quiz_id'
       },
     },
     result: {
       data: {
        quizzes_by_pk: 
         { id: '1', 
           name: 'Buck', 
           questions: [{ 
            id: 'wrong_question_id',
            text: 'questions_title', 
            options: 'questions_option1,question_option2,questions_answer',
            answer: 'questions_answer'
          }],
         }
       },
     },
    }
 ];
 
  render(  
   <MockedProvider mocks={mocks} >
          <QuestionContainer />
       </MockedProvider>
  )
  await waitFor(() => {
    expect(screen.getByText(/Oops! invalid question Id/i)).toBeInTheDocument()
    const backButton = screen.getByRole('button', { name: /back/i })
    expect(backButton).toBeInTheDocument()
    userEvent.click(backButton)
    expect(mockedUsedNavigate).toBeCalled()
  })

 })

 it('render correctly', async () => {
  const mocks = [
   {
     request: {
       query: GetQuizByIdDocument,
       variables: {
        id: 'quiz_id'
       },
     },
     result: {
       data: {
        quizzes_by_pk: 
         { id: '1', 
           name: 'Buck', 
           questions: [{ 
            id: 'question_id',
            text: 'question title', 
            options: 'questions option1,question option2,questions answer',
            answer: 'questions answer'
          }],
         },
       },
     },
    }
 ];
 
  render(  
   <MockedProvider mocks={mocks} >
          <QuestionContainer />
       </MockedProvider>
  )
  await waitFor(() => {
   expect(screen.getByText(/question title/i)).toBeInTheDocument()
   expect(screen.getByText(/questions option1/i)).toBeInTheDocument()
   expect(screen.getByText(/question option2/i)).toBeInTheDocument()
   expect(screen.getByText(/questions answer/i)).toBeInTheDocument()
   const answerCheckBox = screen.queryByTestId('questions answer')
   const finishButton = screen.getByRole('button', { name: /finish/i })
   expect(finishButton).toBeInTheDocument()
   expect(finishButton).toBeDisabled()
   expect(answerCheckBox).toBeInTheDocument()
   userEvent.click(answerCheckBox)
   userEvent.click(finishButton)
   expect(mockedUsedNavigate).toBeCalled()
  })
 })
})