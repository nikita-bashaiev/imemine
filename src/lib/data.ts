import { SocialLinkProps } from '@components/Header';

export const socialLinks: SocialLinkProps[] = [
  {
    href: 'mailto:nikitabashaiev@gmail.com',
    text: 'Email',
    icon: 'tdesign:mail',
    featured: true,
  },
  {
    href: 'https://twitter.com/bashaiev',
    text: 'X/Twitter',
    icon: 'simple-icons:x',
  },
  {
    href: 'https://medium.com/@nikitabashaiev',
    text: 'Medium',
    icon: 'simple-icons:medium',
  },
];

export const pages = [
  {
    href: '/',
    text: 'Timeline',
    count: 5,
  },
  {
    href: '/works',
    text: 'Works',
    count: 3,
  },
  {
    href: '/thoughts',
    text: 'Thoughts',
    count: 8,
  },
  {
    href: '/about',
    text: 'About me',
  },
];
