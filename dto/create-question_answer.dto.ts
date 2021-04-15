export class CreateQuestionAnswerDto {
    id?:number;
    text: string;
    isCorrect: boolean;
    question_id: number;
}