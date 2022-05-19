import { v4 as uuidV4 } from "uuid";

class User {
  id?: String;
  name: String;
  email: String;
  admin: Boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }

    if(!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
