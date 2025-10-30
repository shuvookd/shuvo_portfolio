const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © {currentYear} Shuvo Kumar Das. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
