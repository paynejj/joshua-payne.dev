import { AppShell, NavLink } from "@mantine/core";
import { useLocation } from "react-router-dom";
import sectionData from "data/sectionData";

interface NavBarProps {
  toggle?: () => void;
}
function NavBar({ toggle }: NavBarProps) {
  const location = useLocation();

  return (
    <>
      <AppShell.Section>
        {sectionData.map((section) => (
          <NavLink
            component="a"
            href={section.hash}
            active={location.hash === section.hash}
            key={section.label}
            label={section.label}
            onClick={toggle}
          />
        ))}
      </AppShell.Section>
      <AppShell.Section grow />
      <AppShell.Section>Bottom</AppShell.Section>
    </>
  );
}
export default NavBar;
