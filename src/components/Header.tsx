'use client';
import {
  motion as m,
  AnimatePresence,
  useCycle,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {}

const buttonVars = {
  rest: {
    scale: 1,
  },
  tap: {
    scale: 0.9,
  },
};

const firstBarVars = {
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
  open: {
    rotate: '-45deg',
    translateY: '4px',
  },
};

const secondBarVars = {
  rest: {
    backgroundColor: 'oklch(var(--color-tertiary))',
  },
  hover: {
    backgroundColor: 'oklch(var(--color-primary))',
  },
  closed: {
    rotate: '0deg',
    y: '0px',
  },
  open: {
    rotate: '45deg',
    y: '-4px',
  },
};

export default function Header({}: HeaderProps) {
  const { scrollY } = useScroll();
  const [headerVisible, setHeaderVisible] = useState(true);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  });
  const [navOpen, toggleNavOpen] = useCycle(false, true);
  const pathname = usePathname();

  return (
    <m.header
      className='col-full grid-cols-content bg-surface border-primary/10 fixed inset-x-0 top-0 grid overflow-clip border-b'
      variants={{
        hidden: { y: '-100%' },
        visible: { y: '0' },
        closed: {
          height: '4rem',
          gridTemplateRows: '1fr',
        },
        open: {
          height: '100svh',
          gridTemplateRows: '4rem 1fr',
        },
      }}
      initial='closed'
      animate={
        navOpen ? 'open' : 'closed' && headerVisible ? 'visible' : 'hidden'
      }
    >
      <div className='flex h-16 items-center justify-between'>
        <Link href='/'>Logo</Link>
        <m.button
          className='-mr-3 flex size-12 flex-col items-center justify-center gap-[6px]'
          variants={buttonVars}
          initial='rest'
          animate={navOpen ? 'open' : 'closed'}
          onClick={() => toggleNavOpen()}
          whileHover='hover'
          whileTap='tap'
        >
          <m.div className='h-[2px] w-5' variants={firstBarVars} />
          <m.div className='h-[2px] w-5' variants={secondBarVars} />
        </m.button>
      </div>
      <AnimatePresence>
        {navOpen && (
          <nav className='flex h-full flex-col justify-between pb-6 pt-8'>
            <ul className='flex flex-col gap-6 text-end font-serif text-4xl'>
              <li>
                <Link
                  href='#'
                  className={pathname === '/' ? 'text-purple-500' : ''}
                >
                  <sup>5</sup>Timeline
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <sup>3</sup>Works
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <sup>8</sup>Writing
                </Link>
              </li>
              <li>
                <Link href='#'>About me</Link>
              </li>
            </ul>
            <div className='flex flex-col gap-4'>
              <span>Connect with me</span>
              <hr className='border-primary/10 border-dashed' />
              <div className='grid h-40 grid-cols-2 grid-rows-2 gap-2'>
                <Link
                  href='#'
                  className='bg-primary text-surface row-span-2 grid place-content-center'
                >
                  Email
                </Link>
                <Link
                  href='#'
                  className='bg-primary text-surface grid place-content-center'
                >
                  X/Twitter
                </Link>
                <Link
                  href='#'
                  className='bg-primary text-surface grid place-content-center'
                >
                  ?
                </Link>
              </div>
            </div>
          </nav>
        )}
      </AnimatePresence>
    </m.header>
  );
}
