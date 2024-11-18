import { observable } from "mobx"

// mobx标准写法
export class NewExam {
  @observable courseId: string = ""
  @observable courseName: string = ""
  @observable examId: string = ""
  constructor() {
    this.courseId = ""
    this.courseName = ""
    this.examId = ""
  }
}
