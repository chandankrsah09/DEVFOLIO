export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-secondary font-mono text-lg mb-4" data-testid="footer-logo">
            &lt;CKS /&gt;
          </div>
          <p className="text-slate mb-4" data-testid="footer-description">
            Built with passion using modern web technologies
          </p>
          <p className="text-sm text-slate" data-testid="footer-copyright">
            © 2025 Chandan Kumar Sah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
