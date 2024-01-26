'use client';

import {
  motion as m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Logo from '@components/Logo';
import { socialLinks, pages } from '@lib/data';

const buttonVars = {
  rest: {
    scale: 1,
  },
  tap: {
    scale: 0.8,
  },
};

const commonBarVars = {
  rest: {
    backgroundColor: 'oklch(var(--color-tertiary))',
  },
  hover: {
    backgroundColor: 'oklch(var(--color-primary))',
  },
  closed: {
    rotate: '0deg',
    translateY: '0px',
  },
};

const firstBarVars = {
  ...commonBarVars,
  open: {
    rotate: '-45deg',
    translateY: '4px',
  },
};

const secondBarVars = {
  ...commonBarVars,
  open: {
    rotate: '45deg',
    y: '-4px',
  },
};

export interface SocialLinkProps extends React.AllHTMLAttributes<'a'> {
  icon: string;
  text: string;
  featured?: boolean;
}

function SocialLink({ href, icon, text, featured }: SocialLinkProps) {
  return (
    <m.a
      initial={{ backgroundColor: 'oklch(var(--color-primary))' }}
      whileHover={{ backgroundColor: 'oklch(var(--color-secondary))' }}
      href={href}
      target='_blank'
      className={clsx(
        'text-surface relative grid place-content-center',
        featured && 'row-span-2',
      )}
    >
      {text}
      <Icon
        icon={icon}
        className={clsx('absolute opacity-10', {
          '-bottom-4 -right-4 text-9xl': featured,
          '-bottom-2 -right-2 text-6xl': !featured,
        })}
      />
    </m.a>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [headerVisible, setHeaderVisible] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (!navOpen && previous && latest > previous && latest > 150) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  });

  return (
    <m.header
      className='col-full grid-cols-content bg-surface/85 border-primary/10 fixed inset-x-0 top-0 grid h-16 border-b backdrop-blur'
      variants={{
        hidden: { y: '-100%' },
        visible: { y: '0' },
      }}
      initial='closed'
      animate={headerVisible ? 'visible' : 'hidden'}
    >
      <div className='flex h-16 items-center justify-between'>
        <m.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setNavOpen(false)}
        >
          <Link href='/' className='text-primary'>
            <Logo />
          </Link>
        </m.div>
        <m.button
          className='-mr-3 flex size-12 flex-col items-center justify-center gap-[6px]'
          variants={buttonVars}
          initial='rest'
          animate={navOpen ? 'open' : 'closed'}
          onClick={() => setNavOpen(!navOpen)}
          whileHover='hover'
          whileTap='tap'
        >
          <m.div className='h-[2px] w-5' variants={firstBarVars} />
          <m.div className='h-[2px] w-5' variants={secondBarVars} />
        </m.button>
      </div>
      <AnimatePresence>
        {navOpen && (
          <m.nav
            className='border-primary/10 bg-surface/85 flex h-full flex-col justify-between overflow-clip border-b backdrop-blur'
            initial='closed'
            exit='closed'
            animate='open'
            variants={{
              closed: { height: 0 },
              open: { height: 'calc(100svh - 4rem)' },
            }}
          >
            <ul className='flex flex-col gap-6 pt-8 text-end font-serif text-4xl'>
              {pages.map(({ href, text, count }) => (
                <m.li
                  key={text}
                  initial={{
                    color:
                      pathname === href
                        ? 'oklch(var(--color-primary))'
                        : 'oklch(var(--color-tertiary))',
                  }}
                  whileHover={{ color: 'oklch(var(--color-secondary))' }}
                >
                  <Link onClick={() => setNavOpen(false)} href={href}>
                    <sup>{count}</sup>
                    {text}
                  </Link>
                </m.li>
              ))}
            </ul>
            <div className='flex flex-col gap-4 pb-6'>
              <hr className='border-primary/10 border-dashed' />
              <span className='text-tertiary'>Connect with me</span>
              <div className='grid h-40 grid-cols-2 grid-rows-2 gap-2'>
                {socialLinks.map((link) => (
                  <SocialLink {...link} key={link.text} />
                ))}
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </m.header>
  );
}
