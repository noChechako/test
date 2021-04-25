import { CreateAnswerRequestDTO, AnswerState } from "./answer.dto";

export interface CreateQuestionRequestDTO {
  text: string,
  isMultiple: boolean,
  answers: CreateAnswerRequestDTO[],
  tags: string[],
  explanation: string
}

export interface QuestionResponseDTO extends CreateQuestionRequestDTO {
    id: number
}

export interface QuestionState extends QuestionResponseDTO {
    answers: AnswerState[],
    isDifficult: boolean
}
