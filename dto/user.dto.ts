export interface CreateUserRequestDTO {
  username?: string,
  login: string,
  password: string,
  role?: string[]
}

export interface UserResponseDTO extends CreateUserRequestDTO {
  id:number;
}
