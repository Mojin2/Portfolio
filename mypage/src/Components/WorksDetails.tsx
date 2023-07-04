import { Grid, GridItem } from "@chakra-ui/react";

function WorksDetails() {
  return (
    <Grid
      templateAreas={`"header header"
  "nav main"
  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"300px 1fr"}
      h="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        bg="orange.300"
        area={"header"}
        borderStartEndRadius="20px"
        borderStartStartRadius="20px"
      >
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"} borderEndStartRadius="20px">
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"} borderEndEndRadius="20px">
        Footer
      </GridItem>
    </Grid>
  );
}

export default WorksDetails;
