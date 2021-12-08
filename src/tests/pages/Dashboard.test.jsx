
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Dashboard from "../../pages/Dashboard"
import { MockedProvider } from '@apollo/react-testing'
import {GetQuizzesDocument} from '../../graphql/generated'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));



describe('<Dashboard>', () => {

 it('when unable to fetch quiz data', async () => {
  const mocks = [
   {
     request: {
       query: GetQuizzesDocument,
     },
     result: {
      errors: [ {message: 'Error!'}]
     },
   },
 ];
 
  render(  
   <MockedProvider mocks={mocks} >
    <Dashboard />
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

 it('render Dashboard correctly', async () => {
  const mocks = [
   {
     request: {
       query: GetQuizzesDocument,
     },
     result: {
       data: {
        quizzes: [
         { id: '1', 
           name: 'Buck', 
           questions: [{ id: 'qestion_id', title: 'questions_title', answer: 'questions_answer'  }],
         }
        ],
       },
     },
    }
 ];
 
  render(  
   <MockedProvider mocks={mocks} >
          <Dashboard />
       </MockedProvider>
  )
  await waitFor(() => {
   expect(screen.getByText(/Tilda Quiz/i)).toBeInTheDocument()
   expect(screen.getByText(/Buck/i)).toBeInTheDocument()
   expect(screen.getByText(/Not started/i)).toBeInTheDocument()
   const startButton = screen.getByRole('button', { name: /start/i })
   expect(startButton).toBeInTheDocument()
   userEvent.click(startButton)
   expect(mockedUsedNavigate).toBeCalled()
 
  })

 })
})