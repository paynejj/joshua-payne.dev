import { Carousel } from "@mantine/carousel";
import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import projectData from "data/projectData";

function Projects() {
  return (
    <Stack h={800}>
      <Box p="xl">
        <Title order={2}>Projects</Title>
      </Box>
      <Carousel
        loop
        slideSize="100%"
        slideGap="xl"
        height="100%"
        style={{ flex: 1 }}
      >
        {projectData.map((project, idx) => (
          <Carousel.Slide key={idx}>
            <Card h="100%">
              <Card.Section h="50%">
                {project.img
                  ? <Image h="100%" src={project.img} />
                  : <Skeleton h="100%" />}
              </Card.Section>
              <Title order={3}>{project.title}</Title>
              <Text>{project.description}</Text>
              <Group justify="center" align="center">
                {project.link && (
                  <Button component="a" href={project.link} target="_blank">
                    Link
                  </Button>
                )}
                {project.github && (
                  <Button component="a" href={project.github} target="_blank">
                    GitHub
                  </Button>
                )}
              </Group>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
}

export default Projects;
