import Link from 'next/link';

export default function Home() {
  return (
    <main className='mt-32 flex flex-col gap-24'>
      <section className='flex flex-col gap-6'>
        <h1 className='font-serif text-3xl'>
          Nikita Bashaiev is a designer & developer specialising in thoughtful
          practise of his craft
        </h1>
        <div className='flex gap-2'>
          <Link
            href='/works'
            className='bg-primary text-surface rounded-full px-6 py-3'
          >
            View my works
          </Link>
          <Link
            href='/about'
            className='bg-primary/10 text-primary rounded-full px-6 py-3'
          >
            Get to know me
          </Link>
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <h2>Timeline</h2>
        {/* <article className='flex flex-col gap-3 border p-5'>
          <span className='text-tertiary text-sm'>x.11.2023</span>
          <h3 className='text-primary font-serif text-2xl'>
            Started going to an art course
          </h3>
          <p>
            In preparation for applying to a design school, I have started going
            to an art course organised by the academy of fine arts.
          </p>
        </article>
        <article className='flex flex-col gap-3 border p-5'>
          <span className='text-tertiary text-sm'>x.11.2023</span>
          <h3 className='text-primary font-serif text-2xl'>
            Started going to an art course
          </h3>
          <p>
            In preparation for applying to a design school, I have started going
            to an art course organised by the academy of fine arts.
          </p>
        </article>
        <article className='flex flex-col gap-3 border p-5'>
          <span className='text-tertiary text-sm'>x.11.2023</span>
          <h3 className='text-primary font-serif text-2xl'>
            Started going to an art course
          </h3>
          <p>
            In preparation for applying to a design school, I have started going
            to an art course organised by the academy of fine arts.
          </p>
        </article> */}
        <div className='border-primary/10 text-tertiary flex h-60 items-center justify-center rounded-lg border-2 border-dashed p-5 font-serif text-lg'>
          Coming soon!
        </div>
      </section>
    </main>
  );
}
