import { Button, Group, Stack, Text } from '@mantine/core'

function Home() {
  return (
    <>
      <Text className="text-xl">Hi, my name is</Text>
      <Stack gap="xl">
        <Text
          className="bg-gradient-to-tr from-sky-900 to-sky-600 bg-clip-text 
          text-8xl font-bold text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Joshua Payne
        </Text>
        <Text className="text-xl">
          I am a fullstack Software Engineer excited to build great things!
        </Text>
        <Group>
          <Button className="bg-sky-600">Contact Me</Button>
          <Button className="bg-sky-600">View My Work</Button>
        </Group>
      </Stack>
    </>
  )
}

export const Component = Home
export default Home
