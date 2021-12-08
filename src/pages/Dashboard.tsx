import { Container, Row, Col } from "react-bootstrap"
import { useGetQuizzesQuery } from "../graphql/generated"
import { Loader } from "../components/Loader"
import { Error } from "../components/Error"
import QuizCardContainer from "../components/QuizCard.container"

const Dashboard = () => {
  const { data, loading, error } = useGetQuizzesQuery()
  if (error)
    return <Error message={"Oops! Error Occured while fetching quiz data"} />

  if (loading) return <Loader />

  const quizzes = data ? data.quizzes : []
  return (
    <Container>
      <header className="text-center my-5">
        <h2>Tilda Quiz</h2>
      </header>
      <Row className="g-3">
        {quizzes.map((quiz) => (
          <Col xs={12} md={6} key={quiz.id}>
            <QuizCardContainer {...quiz} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Dashboard
