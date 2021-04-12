export interface TagDTO {
  id: number;
  type?: string;
  name: string;
}

export interface TagState extends TagDTO {
  parentId: number;
}
