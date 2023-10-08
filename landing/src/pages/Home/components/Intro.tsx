import { Box, Button, Text } from "@mantine/core";

function Intro() {
  return (
    <Box p="xl">
      <Box display="inline-block">
        <Text fw="bold" fz="sm">
          Hi, my name is
        </Text>
        <Text fw="bolder" fz="6em" lh={1}>
          Joshua
        </Text>
        <Text fw="bolder" fz="6em" lh={1}>
          Payne
        </Text>
        <Text fz="xl" mt="md">
          I’m a Software Engineer with a passion for building great things.
        </Text>
        <Button>Test</Button>
      </Box>
    </Box>
  );
}

export default Intro;
