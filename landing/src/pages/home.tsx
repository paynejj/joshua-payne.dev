import { Center, Stack, Text, Title } from "@mantine/core";

function Home() {
  return (
    <Center style={{ flexGrow: 1 }}>
      <Stack justify="center">
        <Title top="" ta="center">
          Joshua Payne
        </Title>
        <Text ta="center">
          I am a software engineer excited to solve challenging problems and
          learn new things.
        </Text>
      </Stack>
    </Center>
  );
}

export default Home;
