export interface CreateAnswerRequestDTO {
  text: string,
  correct: boolean
}

export interface AnswerResponseDTO extends CreateAnswerRequestDTO{
    id: number
}

export interface AnswerState extends AnswerResponseDTO {
    isSelected: boolean
}
