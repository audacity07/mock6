import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../redux/blogs/action";

export default function Blog() {
  const blogs = useSelector((store) => store.blogReducer.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  return (
    <>
      <Heading>Blog Page</Heading>
      <Box>
        {blogs.length > 0 &&
          blogs.map((item) => {
            return (
              <Box key={item._id}>
                <Image src={item.avatar} alt="profile image" />
                <Text>{item.username}</Text>
                <Text>{item.category}</Text>
                <Text>{item.date}</Text>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
                <Text>{`Likes: ${item.likes}`}</Text>
                <Text>{`Likes: ${item.content}`}</Text>
                <Text>{`Comments: ${item.comments}`}</Text>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
