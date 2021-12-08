import { Card, Button } from "react-bootstrap"

interface QuizCardProps {
  title: string
  score: number
  totalQuestions: number
  startQuiz: () => void
  hasAttempt: boolean
}

const QuizCard = ({
  score,
  totalQuestions,
  startQuiz,
  title,
  hasAttempt,
}: QuizCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {hasAttempt ? `Score: ${score}/${totalQuestions}` : `Not started`}
        </Card.Text>
        <Button
          variant={hasAttempt ? "danger" : "primary"}
          className="float-end"
          onClick={startQuiz}
        >
          {hasAttempt ? "Redo" : "Start"}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default QuizCard
