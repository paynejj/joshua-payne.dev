import { Box } from "@mantine/core";
import styles from "styles/Home.module.css";
import { Contact, Experience, Intro, Projects } from "./components";

function Home() {
  return (
    <>
      <Box className={styles.sections}>
        <Box id="intro" component="section" className={styles.section}>
          <Intro />
        </Box>
        <Box id="experience" component="section" className={styles.section}>
          <Experience />
        </Box>
        <Box id="projects" component="section" className={styles.section}>
          <Projects />
        </Box>
        <Box id="contact" component="section" className={styles.section}>
          <Contact />
        </Box>
      </Box>
    </>
  );
}

export default Home;
