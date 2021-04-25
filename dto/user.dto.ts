export class CreateUserRequestDTO {
  name: string;
  login: string;
  password: string;
  roles?: number[];
}

// export interface UserResponseDTO extends CreateUserRequestDTO {
//   id:number;
// }
