import React from "react";
import { Navbar, Provider, Heading, Txt, Box, Flex, Button } from "rendition";
import { createGlobalStyle } from "styled-components";
import logo from "../img/logo.svg";
import { DownloadImage } from "./DownloadImage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

const App = () => {
  return (
    <Provider theme={{fontSizes: [12, 14, 16, 18, 20, 26, 38, 48]}}>
      <Navbar brand={<img src={logo} style={{ height: 30 }} alt="logo" />} />
      <GlobalStyle />
      <Box color="text.main">

        <Box mt={100} maxWidth="960px" ml={"10vw"} mr={5}>
          <Heading.h1>Help fight the COVID-19 pandemic</Heading.h1>
          <Txt>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            assumenda quo repellendus. Fugiat vitae placeat non officia ab esse
            consectetur, nemo iure dolorem asperiores! Aperiam esse praesentium
            voluptatum eaque cupiditate.
          </Txt>
        </Box>

        <Box width="100%" mt={4} height="500px" bg="lightblue">
          Map placeholder
        </Box>

        <Flex
          mt={5}
          mx="auto"
          maxWidth="1280px"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          p={5}
        >
          <Box flex={1} mr={[0, 0, 3]}>
            <Heading.h2>How does this help?</Heading.h2>
            <Txt.p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus exercitationem dolore corporis consequuntur velit
              quis nobis accusantium facere, incidunt doloribus illum esse
              accusamus odio, ratione, odit ipsa quam magnam! Porro?
            </Txt.p>
            <Txt.p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              labore nisi doloribus! Dolorem in voluptate error, provident vero
              accusantium, laboriosam, consequatur nisi ex cupiditate impedit
              consectetur necessitatibus cum eaque ducimus.{" "}
            </Txt.p>
          </Box>

          <Box flex={2} ml={[0, 0, 3]} height="400px" bg="lightblue">
            Illustration placeholder
          </Box>
        </Flex>

        <Box mt={5} p={5} bg="quartenary.light" width="100%">
          <Flex
            mx="auto"
            maxWidth="768px"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Heading.h2 align="center">Join the fight</Heading.h2>
            <Txt align="center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium minus quos, aperiam impedit in est nisi, totam odio
              consequuntur asperiores temporibus voluptatibus non ab itaque qui
              deserunt iusto debitis blanditiis!
            </Txt>

            <Box my={4} width="600px" height="300px" bg="lightyellow">
              Illustration placeholder
            </Box>
            <Button primary>Get started</Button>
          </Flex>
        </Box>

				<Flex
          mt={5}
          mx="auto"
          maxWidth="1280px"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          p={5}
        >
            <Heading.h2 align="center">Select your hardware</Heading.h2>
						<DownloadImage />
        </Flex>

				<Box mt={5} p={5} bg="quartenary.light" width="100%">
          <Flex
            mx="auto"
            maxWidth="768px"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Heading.h2 align="center">Tell everyone about this project so they too can help fight the pandemic</Heading.h2>
						<Flex mt={4} alignItems="center" justifyContent="center">
            <Button >Twitter</Button>
						<Button mx={3}>Facebook</Button>
						<Button>Instagram</Button>
						</Flex>
          </Flex>
        </Box>

				
				<Flex
          mt={5}
          maxWidth="960px"
          flexDirection={"column"}
          p={5}
        >
            <Heading.h2>Frequently asked questions</Heading.h2>
						<Box mt={3} height="600px" width="800px" bg="lightblue">Accordion placeholder</Box>
        </Flex>


				<Box mt={5} p={5} bg="quartenary.light" width="100%">
          <Flex
            mx="auto"
            maxWidth="960px"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Heading.h2 align="center">Join our project forum</Heading.h2>
						<Txt align="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem minima distinctio</Txt>
            <Button primary mt={4}>Visit forum</Button>
          </Flex>
        </Box>

      </Box>
    </Provider>
  );
};

export default App;
