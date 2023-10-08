import { Carousel } from "@mantine/carousel";
import { Box, Card, Group, Stack, Text, Title } from "@mantine/core";
import experienceData from "data/experienceData";

function Experience() {
  return (
    <>
      <Stack h={800}>
        <Box p="xl">
          <Title order={2}>Experience</Title>
        </Box>

        <Carousel loop slideSize="100%" height="100%" style={{ flex: 1 }}>
          {experienceData.map((experience, idx) => (
            <Carousel.Slide key={idx}>
              <Card h="100%">
                <Group justify="space-between">
                  <Group>
                    <Title order={3}>{experience.title}</Title>
                    <Text>{experience.company}</Text>
                  </Group>
                  <Text>
                    {experience.startDate} - {experience.endDate}
                  </Text>
                </Group>
                <Text>{experience.bullets}</Text>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </>
  );
}

export default Experience;
