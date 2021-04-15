import { QuestionAnswerEntity } from "src/common";
import { QuestionController } from "../../../question/question.controller";
import { CreateQuestionAnswerDto } from "./create-question_answer.dto";

export class CreateQuestionRequestDto {
  id:number;
  text: string;
  isMultiple: boolean;
  answers: CreateQuestionAnswerDto[];
  tags?: string[];
  explanation: string;
    
  }


