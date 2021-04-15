import { AnswersDTO } from "./answer_result.dto";

export class CreateResultDto {
    id: number;
    isCorrect: boolean;
    userId:number;
    answers: AnswersDTO[];

}