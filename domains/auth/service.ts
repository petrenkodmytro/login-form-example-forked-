import { sleep } from "@/utilities/async";

class _AuthService {
  login = async (email: string, password: string) => {
    await sleep(2000);
    console.log(email, password);
  };
}

export const AuthService = new _AuthService();
