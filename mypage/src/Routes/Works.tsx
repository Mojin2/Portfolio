import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import WorksDetails from "../Components/WorksDetails";
import WorksInputForm from "../Components/WorksInputForm";
import { dbService } from "../Firebase";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`;
const Ment = styled.div`
  width: 15%;
`;
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   width: 85%;
//   gap: 5px;
//   padding-left: 20px;
//   padding-right: 10px;
//   padding-top: 15px;
//   row-gap: 20px;
// `;
const CustomBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: #eeeeee;
  border-radius: 20px;
`;
const AddButton = styled.div`
  height: 200px;
  width: 200px;
  background-color: skyblue;
  border-radius: 20px;
`;
const Overlay = styled(motion.div)`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 100%;
  height: 687px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Works() {
  const [Salgu, setSalgu] = useState("Salgu");
  const [works, setWorks] = useState([] as any);
  // const getWorks = async () => {
  //   const q = query(
  //     collection(dbService, "works"),
  //     orderBy("createdAt", "desc")
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     const newObj = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setWorks((prev: any) => [...prev, newObj]);
  //   });
  //   // onSnapshot(q, (snapshot) => {
  //   //   const workArr = snapshot.docs.map((doc) => ({
  //   //     ...doc.data(),
  //   //     id: doc.id,
  //   //   }));
  //   //   setWorks(workArr);
  //   // });
  // };
  // useEffect(() => {
  //   getWorks();
  // }, []);
  const onClick = () => {
    // const decRef = await addDoc(collection(dbService, "works"), {
    //   Salgu,
    //   createdAt: Date.now(),
    console.log("clicked");
  };
  const [id, setId] = useState<null | string>(null);
  const [input, setInput] = useState<null | boolean>(false);
  return (
    <Wrapper>
      <Ment></Ment>
      <SimpleGrid
        width="85%"
        minChildWidth="200px"
        spacingX="10px"
        spacingY="10px"
        pr="2%"
        pt="2%"
      >
        <Box
          as={motion.div}
          layoutId="1"
          bg="#eeeeee"
          height="200px"
          borderRadius="20px"
          onClick={() => setId("1")}
        ></Box>
        <Box
          as={motion.div}
          layoutId="2"
          bg="#eeeeee"
          height="200px"
          borderRadius="20px"
          onClick={() => setId("2")}
        ></Box>
        <Box
          as={motion.div}
          layoutId="3"
          bg="#eeeeee"
          height="200px"
          borderRadius="20px"
          onClick={() => setId("3")}
        ></Box>
        <Box
          as={motion.div}
          layoutId="4"
          bg="#eeeeee"
          height="200px"
          borderRadius="20px"
          onClick={() => setId("4")}
        ></Box>
        <Box
          as={motion.div}
          layoutId="plus"
          bg="green"
          height="200px"
          borderRadius="20px"
          onClick={() => {
            setInput((prev) => !prev);
          }}
        ></Box>
      </SimpleGrid>
      <AnimatePresence>
        {id ? (
          <Overlay onClick={() => setId(null)}>
            <Box
              as={motion.div}
              layoutId={id}
              bg="#eeeeee"
              width={"800px"}
              height={"400px"}
              borderRadius={"20px"}
            >
              <WorksDetails />
            </Box>
          </Overlay>
        ) : input ? (
          <Overlay onClick={() => setInput((prev) => !prev)}>
            <Box
              as={motion.div}
              layoutId="plus"
              bg="#eeeeee"
              width={"400px"}
              height={"400px"}
              borderRadius={"20px"}
            >
              <WorksInputForm />
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Works;
