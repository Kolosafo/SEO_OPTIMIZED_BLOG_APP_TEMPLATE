import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Banner />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <Header />
        <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
