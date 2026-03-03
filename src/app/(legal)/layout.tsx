interface LegalLayoutProps {
  children: React.ReactNode;
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
  );
};

export default LegalLayout;
