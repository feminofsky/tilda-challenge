import { Suspense, lazy, Fragment, ElementType } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Dashboard = lazy(() => import("../pages/Dashboard"))
const Quiz = lazy(() => import("../pages/Question.container"))

const AppRoute = ({ Loader }: { Loader: ElementType }) => {
  return (
    <Router>
      <Fragment>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/quiz/:quizId/question/:questionId"
              element={<Quiz />}
            />
          </Routes>
        </Suspense>
      </Fragment>
    </Router>
  )
}

export default AppRoute
