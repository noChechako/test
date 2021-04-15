export class TagResponseDTO {
    id:number;
    name: string;
    createdOn: Date;
    updatedOn: Date;
    parent_question_id: number;
    isUseInStatistic: boolean;
    isHide: boolean;
    priority: number;
    type:string;
}