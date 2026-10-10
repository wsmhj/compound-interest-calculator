import type {Metadata} from 'next';
import Brand from '../components/Brand';
import Contact from '../components/Contact';
import './globals.css';
import './theme.css';
export const metadata:Metadata={title:{default:'Compound Interest Calculator',template:'%s | Compound Interest Calculator'},icons:{icon:'/icon.svg',apple:'/apple-icon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to calculator and content</a><header className="site-header no-print"><div className="header-inner"><Brand iconOnly/><nav aria-label="Main navigation"><a href="/#calculator">Calculator</a><a href="/#how-it-works">How it works</a><a href="/about/">About</a></nav><Contact label="Feedback"/></div></header><main id="main">{children}</main><footer className="site-footer no-print"><div className="footer-top"><div><Brand/><p>Compound interest. Every assumption in view.</p></div><nav aria-label="Footer navigation"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a><a href="/disclaimer/">Disclaimer</a></nav></div><div className="footer-bottom"><p>© 2026 Compound Interest Calculator. Independent calculation tools. Educational use.</p><Contact/></div></footer></body></html>;}
