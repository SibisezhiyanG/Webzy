import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Logo size="sm" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Webzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
