import { createContext, ReactElement, useContext, useMemo, useReducer } from "react"

interface ExamContextState {
  examId: number | null
  isEdit: boolean
  questionList: IQuestion[]
  title: string
  isPublish: boolean
  rewriteQuestion: IQuestion | null
  regeneratingQuestionId: number | null
  regeneratingQuestionParams: any
}
interface ExamContextAPI {
  updateTitle: (title: string) => void
  updateExamId: (id: number) => void
  updateIsEdit: (isEdit: boolean) => void
  updateQuestionList: (questions: IQuestion[]) => void
  updateQuestion: (question: IQuestion) => void
  updateIsPublish: (isPublish: boolean) => void
  updateRewriteQuestion: (question: IQuestion) => void
  updateRegeneratingQuestionId: (id: number) => void
  updateRegeneratingQuestionParams: (params: any) => void
}
type Actions =
  | {
      type: "UPDATE_TITLE"
      payload: string
    }
  | {
      type: "UPDATE_EXAM_ID"
      payload: number
    }
  | {
      type: "UPDATE_IS_EDIT"
      payload: boolean
    }
  | {
      type: "UPDATE_QUESTION_LIST"
      payload: IQuestion[]
    }
  | {
      type: "UPDATE_QUESTION"
      payload: IQuestion
    }
  | {
      type: "UPDATE_IS_PUBLISH"
      payload: boolean
    }
  | {
      type: "UPDATE_REWRITE_QUESTION"
      payload: IQuestion
    }
  | {
      type: "UPDATE_REGENERATING_QUESTION_ID"
      payload: number
    }
  | {
      type: "UPDATE_REGENERATING_QUESTION_PARAMS"
      payload: any
    }
const ExamAPIContext = createContext<ExamContextAPI | null>(null)
interface IQuestion {
  id: number
  question: string
  answers: string[]
  correctAnswer: number
}
const ExamIdContext = createContext<number | null>(null)
const ExamIsEditContext = createContext<boolean>(false)
const ExamQuestionListContext = createContext<IQuestion[]>([])
const ExamTitleContext = createContext<string>("")
const ExamIsPublishContext = createContext<boolean>(false)
const ExamRewriteQuestionContext = createContext<IQuestion | null>(null)
const ExamRegeneratingQuestionId = createContext<number | null>(null)
const ExamRegeneratingQuestionParams = createContext<any>(null)

export const useExamIdContext = () => {
  return useContext(ExamIdContext)
}
export const useExamIsEditContext = () => {
  return useContext(ExamIsEditContext)
}
export const useExamQuestionListContext = () => {
  return useContext(ExamQuestionListContext)
}
export const useExamTitleContext = () => {
  return useContext(ExamTitleContext)
}
export const useExamIsPublishContext = () => {
  return useContext(ExamIsPublishContext)
}
export const useExamRewriteQuestionContext = () => {
  return useContext(ExamRewriteQuestionContext)
}
export const useExamRegeneratingQuestionId = () => {
  return useContext(ExamRegeneratingQuestionId)
}
export const useExamRegeneratingQuestionParams = () => {
  return useContext(ExamRegeneratingQuestionParams)
}
export const useExamAPIContext = () => {
  return useContext(ExamAPIContext)
}
const reducer = (state: ExamContextState, action: Actions) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
      }
    case "UPDATE_EXAM_ID":
      return {
        ...state,
        examId: action.payload,
      }
    case "UPDATE_IS_EDIT":
      return {
        ...state,
        isEdit: action.payload,
      }
    case "UPDATE_QUESTION_LIST":
      return {
        ...state,
        questionList: action.payload,
      }
    case "UPDATE_QUESTION":
      return {
        ...state,
        question: action.payload,
      }
    case "UPDATE_IS_PUBLISH":
      return {
        ...state,
        isPublish: action.payload,
      }
    case "UPDATE_REWRITE_QUESTION":
      return {
        ...state,
        rewriteQuestion: action.payload,
      }
    case "UPDATE_REGENERATING_QUESTION_ID":
      return {
        ...state,
        regeneratingQuestionId: action.payload,
      }
    case "UPDATE_REGENERATING_QUESTION_PARAMS":
      return {
        ...state,
        regeneratingQuestionParams: action.payload,
      }
    case "UPDATE_REGENERATING_QUESTION_PARAMS":
      return {
        ...state,
        regeneratingQuestionParams: action.payload,
      }
    // case "START_EXAM":
    //   return {
    //    ...state,
    //     questions: action.payload.questions,
    //     answers: action.payload.answers,
    //     currentQuestion: 0,
    //     score: 0,
    //     isFinished: false
    //   }
    // case "SELECT_ANSWER":
    //   return {
    //    ...state,
    //     answers: action.payload.answers,
    //     score: action.payload.score,
    //     isFinished: action.payload.isFinished
    //   }
  }
}
const ExamProvider = (props: { children: ReactElement }) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, {} as ExamContextState)
  const api = useMemo(() => {
    const updateTitle = (title: string) => {
      dispatch({ type: "UPDATE_TITLE", payload: title })
    }
    const updateExamId = (id: number) => {
      dispatch({ type: "UPDATE_EXAM_ID", payload: id })
    }
    const updateIsEdit = (isEdit: boolean) => {
      dispatch({ type: "UPDATE_IS_EDIT", payload: isEdit })
    }
    const updateQuestionList = (questions: IQuestion[]) => {
      dispatch({ type: "UPDATE_QUESTION_LIST", payload: questions })
    }
    const updateQuestion = (question: IQuestion) => {
      dispatch({ type: "UPDATE_QUESTION", payload: question })
    }
    const updateIsPublish = (isPublish: boolean) => {
      dispatch({ type: "UPDATE_IS_PUBLISH", payload: isPublish })
    }
    const updateRewriteQuestion = (question: IQuestion) => {
      dispatch({ type: "UPDATE_REWRITE_QUESTION", payload: question })
    }
    const updateRegeneratingQuestionId = (id: number) => {
      dispatch({ type: "UPDATE_REGENERATING_QUESTION_ID", payload: id })
    }
    const updateRegeneratingQuestionParams = (params: any) => {
      dispatch({ type: "UPDATE_REGENERATING_QUESTION_PARAMS", payload: params })
    }
    return {
      updateTitle,
      updateExamId,
      updateIsEdit,
      updateQuestionList,
      updateQuestion,
      updateIsPublish,
      updateRewriteQuestion,
      updateRegeneratingQuestionId,
      updateRegeneratingQuestionParams,
    }
  }, [])
  return (
    <ExamAPIContext.Provider value={api}>
      <ExamTitleContext.Provider value={state.title}>
        <ExamIdContext.Provider value={state.examId}>
          <ExamIsEditContext.Provider value={state.isEdit}>
            <ExamQuestionListContext.Provider value={state.questionList}>
              <ExamIsPublishContext.Provider value={state.isPublish}>
                <ExamRewriteQuestionContext.Provider value={state.rewriteQuestion}>
                  <ExamRegeneratingQuestionId.Provider value={state.regeneratingQuestionId}>
                    <ExamRegeneratingQuestionParams.Provider
                      value={state.regeneratingQuestionParams}
                    >
                      {children}
                    </ExamRegeneratingQuestionParams.Provider>
                  </ExamRegeneratingQuestionId.Provider>
                </ExamRewriteQuestionContext.Provider>
              </ExamIsPublishContext.Provider>
            </ExamQuestionListContext.Provider>
          </ExamIsEditContext.Provider>
        </ExamIdContext.Provider>
      </ExamTitleContext.Provider>
    </ExamAPIContext.Provider>
  )
}
export default ExamProvider
