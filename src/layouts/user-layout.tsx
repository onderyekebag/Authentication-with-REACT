import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout = ({children}: UserLayoutProps) => {
  return (
    <div className="min-h-screen">
        <Header />
            <main className="min-h-screen">
                {children}
            </main>
        <Footer />
    </div>
  );
};

export default UserLayout;