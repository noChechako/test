export interface TagRequestDTO {
  id: number;
  type?: string;
  name: string;
}

export interface TagState extends TagRequestDTO {
  parentId: number;
}
