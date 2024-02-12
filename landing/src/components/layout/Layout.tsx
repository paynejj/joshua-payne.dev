import { AppShell, Burger, Group, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logo from 'assets/logo.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link, NavLink, Outlet } from 'react-router-dom'

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
            <Link to="/">
              <Image src={logo} alt="Logo" w={100} />
            </Link>
            <Group className="md:absolute md:left-1/2">
              <Link to="https://github.com/paynejj" target="_blank">
                <FaGithub className="size-9" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/joshua-payne-7041131b6/"
                target="_blank"
              >
                <FaLinkedin className="size-9" />
              </Link>
            </Group>
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
