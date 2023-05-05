import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Durgesh",
    email: "durgeshy5226@gmail.com",
  },
});

UserContext.displayName = UserContext;
export default UserContext;
