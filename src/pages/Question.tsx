import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { Questions } from "../graphql/generated"
import { useNavigate } from "react-router-dom"

interface QuestionProps {
  quizName: string
  question: Omit<Questions, "quiz" | "quiz_id">
  options: string[]
  selectedOption: string
  setSelectedOption: (a: string) => void
  handleNext: () => void
  isLastQuestion: boolean
}

const Question = ({
  quizName,
  question,
  options,
  selectedOption,
  setSelectedOption,
  handleNext,
  isLastQuestion,
}: QuestionProps) => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
          
              <div>
                <header className="my-5 text-center">
                  <h2>{quizName}</h2>
                </header>
                <h4 className="text-center">{question?.text}</h4>
                <Form className="mt-5">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="border rounded p-2 my-3 text-capitalize"
                    >
                      <Form.Check
                        type="radio"
                        label={option}
                        name="option"
                        value={option}
                        data-testid={option}
                        className="w-100"
                        checked={option === selectedOption}
                        onChange={() => setSelectedOption(option)}
                      />
                    </div>
                  ))}

                  <Row className="mt-5 text-center">
                    <Col>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="px-5"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        size="lg"
                        className="px-5"
                        disabled={!selectedOption}
                        onClick={() => handleNext()}
                      >
                        {isLastQuestion ? "Finish" : "Next"}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Question
