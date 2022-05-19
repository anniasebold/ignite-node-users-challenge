import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userById = this.usersRepository.findById(user_id);

    if (!userById) {
      throw new Error("User not found");
    }

    const userUpdated = this.usersRepository.turnAdmin(userById);

    return userUpdated;
  }
}

export { TurnUserAdminUseCase };
