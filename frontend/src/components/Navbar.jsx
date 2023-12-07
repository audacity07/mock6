import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      display="flex"
      p={"20px"}
      marginBottom={"20px"}
      color={"white"}
      backgroundColor={"#151515"}
      gap={"50px"}
      justifyContent={"center"}
    >
      <Link to={"/"}>SIGNUP</Link>
      <Link to={"/login"}>LOGIN</Link>
      <Link to={"/blogs"}>BLOGS</Link>
    </Box>
  );
};
