import { action, observable, reaction } from "mobx"

export class NewTestPaperStore {
  @observable accessor courseId = ""
  @observable accessor courseName = ""
  @observable accessor examId = ""
  @observable accessor currentStep: number = 0
  @observable accessor examName = ""
  @observable accessor editingStep = ""
  @action
  getDataFormStorage = () => {
    if (this.examId) {
      this.currentStep = Number(sessionStorage.getItem(`testPaper_step_${this.examId}`) || 0)
    } else {
      this.examId = sessionStorage.getItem(`testPaper_examId_${this.courseId}`) || ""
      this.currentStep = Number(sessionStorage.getItem(`testPaper_step_${this.examId}`) || 0)
    }
  }
  constructor(courseId: string, courseName: string, examId?: string) {
    this.courseId = courseId
    this.courseName = courseName
    if (examId) {
      this.examId = examId
    }
    this.getDataFormStorage()
    reaction(
      () => this.currentStep,
      (step) => {
        console.log("reaction-step=", step, step.toString())
        if (this.examId) {
          sessionStorage.setItem(`testPaper_step_${this.examId}`, JSON.stringify(this.currentStep))
        }
      },
    )
    reaction(
      () => this.examId,
      (examId) => {
        console.log("reaction-examId=", examId)
        sessionStorage.setItem(`testPaper_examId_${this.examId}`, examId)
        if (!this.editingStep) {
          sessionStorage.setItem(`testPaper_examId_${this.courseId}`, this.examId)
        }
      },
    )
    reaction(
      () => this.editingStep,
      (editingStep) => {
        console.log("reaction-editingStep=", editingStep)
        if (this.examId) {
          sessionStorage.setItem(`testPaper_editingStep_${this.examId}`, this.editingStep)
        }
      },
    )
  }
}
const store = {}
export const creatNewTestPaperStore = (
  courseId: string,
  courseName: string,
  examId?: string,
): NewTestPaperStore => {
  // 编辑
  if (examId) {
    if (store[examId]) {
      return store[examId]
    }
    return (store[examId] = new NewTestPaperStore(courseId, courseName, examId))
  }
  // 新建
  if (store[courseId]) {
    return store[courseId]
  }
  return (store[courseId] = new NewTestPaperStore(courseId, courseName))
}
