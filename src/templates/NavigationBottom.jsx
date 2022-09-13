import BottomNavLink from "../components/subcomponents/BottomNavLink";
import ThemeToggle from "../components/buttons/ThemeToggle";
const NavigationBottom = () => {
  const navigation = [
    { icon: "IoHome", href: "/" },
    { icon: "IoPulse", href: "/trends" },
    { icon: "IoCalendar", href: "/events" },
    { icon: "IoSettingsSharp", href: "/settings" },
  ];
  return (
    <nav className="z-40 flex fixed bottom-0 w-screen select-none shadow-top bg-white dark:bg-additional">
      <div className="wrapper h-full w-10/12  mx-auto">
        <ul className="flex justify-between items-center py-2">
          {navigation.map((item, index) => (
            <BottomNavLink key={index} icon={item.icon} href={item.href} to="/" />
          ))}
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBottom;
