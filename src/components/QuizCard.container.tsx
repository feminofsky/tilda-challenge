import QuizCard from "./QuizCard"
import { useLocalStorage } from "../store"
import { useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { GetQuizzesQuery } from "../graphql/generated"

const QuizCardContainer = ({
  id,
  name,
  questions,
}: GetQuizzesQuery["quizzes"][number]) => {
  const navigate = useNavigate()
  const [quizScore, setQuizScore] = useLocalStorage(id, {})
  const score = questions?.reduce((score, question) => {
    if (quizScore[question.id] === question.answer) return score + 1
    return score
  }, 0)

  const totalQuestions = quizScore?.totalQuestions
  const quizPage = `/quiz/${id}/question/${questions[0]?.id ?? ""}`

  const startQuiz = useMemo(
    () => async () => {
      await setQuizScore({ score: 0, totalQuestions: questions.length })
      await navigate(quizPage)
    },
    [quizPage, questions.length, setQuizScore, navigate]
  )

  return (
    <QuizCard
      title={name}
      score={score}
      startQuiz={startQuiz}
      hasAttempt={quizScore.isCompleted}
      totalQuestions={totalQuestions}
    />
  )
}

export default QuizCardContainer
