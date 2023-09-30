import { AppShell, Burger, Group, Stack, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <div>JP</div>
            <Group ml="xl" visibleFrom="sm">
              <UnstyledButton component={Link} to="/">
                Home
              </UnstyledButton>
              <UnstyledButton component={Link} to="/about-me">
                Bio
              </UnstyledButton>
              <UnstyledButton component={Link} to="projects">
                Projects
              </UnstyledButton>
              <UnstyledButton component={Link} to="contact-me">
                Contact
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <Stack>
          <UnstyledButton component={Link} to="/" onClick={toggle}>
            Home
          </UnstyledButton>
          <UnstyledButton component={Link} to="/about-me" onClick={toggle}>
            Bio
          </UnstyledButton>
          <UnstyledButton component={Link} to="projects" onClick={toggle}>
            Projects
          </UnstyledButton>
          <UnstyledButton component={Link} to="contact-me" onClick={toggle}>
            Contact
          </UnstyledButton>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main display="flex">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
