export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-secondary/20">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Ixidore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
