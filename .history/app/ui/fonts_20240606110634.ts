import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';
const Lusitana = localFont({
  src: './my-font.woff2',
  display: 'swap',
});

export const inter = Inter({ subsets: ['latin'] });
export const Lusitana = Lusitana({ subsets: ['weight'] });
