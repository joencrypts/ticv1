import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from "./StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Programs", ariaLabel: "See programs", link: "/programs" },
  { label: "About Us", ariaLabel: "Learn about us", link: "/about" },
  { label: "Apply", ariaLabel: "Apply to join", link: "/apply" },
  { label: "Get Started", ariaLabel: "Get started", link: "/apply" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={false}
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen
        colors={["#000000", "#C0C0C0", "#FFFFFF"]}
        accentColor="#C0C0C0"
        logoUrl="/logo/ticlogo.svg"
      />
    </div>
  );
};

export default Navigation;
