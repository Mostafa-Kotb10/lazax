import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <Banner />
      <Navigation />
    </header>
  );
};
