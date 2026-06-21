import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <p>Stay connected!</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
