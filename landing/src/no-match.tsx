import { Box, Center, Text, Title } from "@mantine/core";

export default function NoMatch() {
  return (
    <Center style={{ flex: "1" }}>
      <Box>
        <Title>Page Not Found</Title>
        <Text>It's ok, typos happen. Try someplace else!</Text>
      </Box>
    </Center>
  );
}
