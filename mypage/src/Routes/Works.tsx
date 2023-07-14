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
import { url } from "inspector";
import { useEffect, useState } from "react";
import { BsFolderPlus, BsPlus } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { URL } from "url";
import { worksState } from "../atoms";
import WorksDetails from "../Components/WorksDetails";
import WorksInputForm from "../Components/WorksInputForm";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: centers;
`;

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
const Image = styled.img`
  background-size: cover;
  filter: brightness(80%);
  :hover {
    scale: 1.1;
    filter: brightness(110%);
  }
  transition-duration: 0.5s;
  transition-property: scale;
  /* border-radius: 20px; */
  cursor: pointer;
`;
const Cover = styled.div`
  color: #eeeeee;
  font-weight: 600;
  font-size: 26px;
`;
function Works() {
  const [id, setId] = useState<null | string>(null);
  const [input, setInput] = useState<null | boolean>(false);
  const [works, setWorks] = useRecoilState(worksState);
  return (
    <Wrapper>
      <SimpleGrid
        width="90%"
        minChildWidth="200px"
        spacingX="10px"
        spacingY="10px"
        pt="2%"
      >
        {works?.map((work) => (
          <Box
            key={`${work.id}`}
            bg="#eeeeee"
            as={motion.div}
            layoutId={`${work.id}`}
            height="200px"
            // borderRadius="20px"
            onClick={() => setId(`${work.id}`)}
            // backgroundImage={`url('/images/${work.id}.PNG')`}
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // _hover={{ scale: "1.7" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* <Cover>{work.title}</Cover> */}
            <Image src={`/images/${work.id}.PNG`} />
          </Box>
        ))}
        {/* <Box
          as={motion.div}
          layoutId="plus"
          bg="blue.500"
          height="200px"
          borderRadius="20px"
          onClick={() => {
            setInput((prev) => !prev);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsFolderPlus size={48} />
        </Box> */}
      </SimpleGrid>
      <AnimatePresence>
        {id ? (
          <Overlay>
            <Box
              as={motion.div}
              layoutId={id}
              bg="#eeeeee"
              width={"800px"}
              height={"400px"}
              borderRadius={"20px"}
              position="relative"
            >
              <MdCancel
                size="35px"
                onClick={() => setId(null)}
                style={{
                  position: "absolute",
                  right: "8",
                  top: "5",
                  cursor: "pointer",
                }}
              />
              <WorksDetails id={id} />
            </Box>
          </Overlay>
        ) : // input ? (
        //   <Overlay>
        //     <Box
        //       as={motion.div}
        //       layoutId="plus"
        //       bg="#eeeeee"
        //       width={"400px"}
        //       height={"400px"}
        //       borderRadius={"20px"}
        //       position="relative"
        //     >
        //       <MdCancel
        //         size="35px"
        //         onClick={() => setInput(null)}
        //         style={{
        //           position: "absolute",
        //           right: "8",
        //           top: "5",
        //           cursor: "pointer",
        //         }}
        //       />
        //       <WorksInputForm />
        //     </Box>
        //   </Overlay>
        // ) :
        null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Works;

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
// const onClick = () => {
//   // const decRef = await addDoc(collection(dbService, "works"), {
//   //   Salgu,
//   //   createdAt: Date.now(),
//   console.log("clicked");
// };
