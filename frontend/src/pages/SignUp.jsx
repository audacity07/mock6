import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/action";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      username,
      email,
      avatar,
      password,
    };
    // console.log(obj);
    dispatch(registerUser(obj)).then(() => {
      alert("Registered successfully");
      setAvatar("");
      setUsername("");
      setEmail("");
      setPassword("");
    });
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <VStack w={"50%"} m={"auto"}>
          <Input
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            placeholder="Avatar"
            type="text"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
          />
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
          <Button type="Submit">Register</Button>
        </VStack>
      </form>
    </>
  );
}
