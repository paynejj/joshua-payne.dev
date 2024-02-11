import { AppShell, Burger, Group, Text, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  const [opened, { toggle }] = useDisclosure()

  const navLinks: { label: string; link: string }[] = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    { label: 'Contact', link: '/contact' },
  ]
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <UnstyledButton>
              <Text size="xl">JP</Text>
            </UnstyledButton>
            <Group ml="xl" className="space-x-2" gap={0} visibleFrom="sm">
              {navLinks.map((navLink, idx) => (
                <NavLink
                  key={idx}
                  to={navLink.link}
                  end
                  className={({ isActive }): string =>
                    [
                      'rounded p-2 hover:bg-sky-600',
                      isActive ? 'bg-sky-600' : '',
                    ].join(' ')
                  }
                >
                  {navLink.label}
                </NavLink>
              ))}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {navLinks.map((navLink, idx) => (
          <NavLink
            key={idx}
            to={navLink.link}
            onClick={() => toggle()}
            end
            className={({ isActive }): string =>
              [
                'rounded p-2 hover:bg-sky-600',
                isActive ? 'bg-sky-600' : '',
              ].join(' ')
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout
