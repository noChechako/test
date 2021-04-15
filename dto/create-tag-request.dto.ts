export class CreateTagRequestDto {
  name: string;
  parentTagId: number;
  isUseInStatistic: boolean;
  isHide: boolean;
  priority: number;
  type:string;
}