import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    // console.log(obj);
    dispatch(loginUser(obj)).then(() => {
      alert("Login successfull");
      setEmail("");
      setPassword("");
    });
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <VStack w={"50%"} m={"auto"}>
          <Input
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="Submit">Login</Button>
        </VStack>
      </form>
    </>
  );
}
