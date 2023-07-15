import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonProps,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrow90DegRight, BsBoxArrowInRight } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CustomAccordion() {
  const navigate = useNavigate();
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "teal", color: "white" }}
            height="70px"
          >
            <Box
              as="div"
              flex="1"
              textAlign="left"
              textColor={"white"}
              fontSize={"50px"}
              fontWeight={800}
            >
              WHO AM I
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textColor={"white"} width={"300px"}>
          <Text>Introduce myself.</Text>
          <Text>Come and see my info page.</Text>
          <Button
            rightIcon={<MdArrowForward />}
            onClick={() => navigate("/who")}
            px="8px"
            height="30px"
            mt="10px"
            _hover={{ bg: "teal", color: "white" }}
          >
            Go
          </Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            height="70px"
            _expanded={{ bg: "teal", color: "white" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor={"white"}
              fontSize={"50px"}
              fontWeight={800}
            >
              MY WORKS
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textColor={"white"} width={"300px"}>
          <Text>Page for My Works</Text>
          <Text>University ~ Now</Text>
          <Button
            rightIcon={<MdArrowForward />}
            onClick={() => navigate("/works")}
            px="8px"
            height="30px"
            mt="10px"
            _hover={{ bg: "teal", color: "white" }}
          >
            Go
          </Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            height="70px"
            _expanded={{ bg: "teal", color: "white" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor={"white"}
              fontSize={"50px"}
              fontWeight={800}
            >
              MY VISION
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textColor={"white"} width={"300px"}>
          <Text>What Will do</Text>
          <Text>Upgrade my Skills</Text>
          <Button
            rightIcon={<MdArrowForward />}
            onClick={() => navigate("/vision")}
            px="8px"
            height="30px"
            mt="10px"
            _hover={{ bg: "teal", color: "white" }}
          >
            Go
          </Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            height="70px"
            _expanded={{ bg: "teal", color: "white" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor={"white"}
              fontSize={"50px"}
              fontWeight={800}
            >
              MORE ABOUT
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textColor={"white"} width={"300px"}>
          <Text>More Detail Info About Me</Text>
          <Button
            rightIcon={<MdArrowForward />}
            onClick={() => navigate("/more")}
            px="8px"
            height="30px"
            mt="10px"
            _hover={{ bg: "teal", color: "white" }}
          >
            Go
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default CustomAccordion;
