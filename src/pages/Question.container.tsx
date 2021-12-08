import { useNavigate } from "react-router-dom"
import { useParams } from "react-router"
import { Loader } from "../components/Loader"
import { Error } from "../components/Error"
import { useLocalStorage } from "../store"

import { useGetQuizByIdQuery } from "../graphql/generated"
import Question from "./Question"

const QuestionContainer = () => {
  // params
  const { quizId, questionId } = useParams()
  const navigate = useNavigate()
  const [quizScore, setQuizScore] = useLocalStorage(quizId || "", {})
  const selectedOption = quizScore?.[`${questionId}`]

  const { data, loading, error } = useGetQuizByIdQuery({
    variables: {
      id: quizId,
    },
  })

  if (error)
    return <Error message={"Oops! Error Occured while fetching quiz data"} />

  if (loading) return <Loader />

  const quizData = data?.quizzes_by_pk
  const quizQuestions = quizData?.questions
  const questionData = quizQuestions?.find(
    (question) => question.id === questionId
  )
  if (!questionData) return <Error message={"Oops! invalid question Id"} />
  const currentIndex = quizQuestions?.indexOf(questionData)
  const options = questionData?.options ? questionData.options.split(",") : []
  const isLastQuestion = currentIndex! + 1 === quizQuestions?.length
  const nextQuestionID = quizQuestions && quizQuestions[currentIndex! + 1]?.id

  const handleNext = () => {
    if (isLastQuestion) return navigate("/dashboard")
    return navigate(`/quiz/${quizId}/question/${nextQuestionID}`)
  }

  const setSelectedOption = (option: string) => {
    setQuizScore({
      ...quizScore,
      [`${questionId}`]: option,
      isCompleted: isLastQuestion,
    })
  }

  return (
    <Question
      quizName={quizData?.name ?? ''}
      question={questionData}
      options={options}
      setSelectedOption={setSelectedOption}
      selectedOption={selectedOption}
      handleNext={handleNext}
      isLastQuestion={isLastQuestion}
    />
  )
}

export default QuestionContainer
