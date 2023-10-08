import { Burger, Group, Text, UnstyledButton } from "@mantine/core";
import sectionData from "data/sectionData";
import styles from "styles/Header.module.css";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}
function Header({ opened, toggle }: HeaderProps) {
  return (
    <Group h="100%" px="md" grow>
      <Group justify="space-between">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Text fw="bolder" c="var(--mantine-primary-color-filled)">
          JP
        </Text>
        <Group ml="xl" visibleFrom="sm" fw="bolder">
          {sectionData.map((section) => (
            <UnstyledButton
              className={styles.link}
              key={section.label}
              component="a"
              href={section.hash}
            >
              {section.label}
            </UnstyledButton>
          ))}
        </Group>
      </Group>
    </Group>
  );
}
export default Header;
