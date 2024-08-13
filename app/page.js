import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <section >
      <div className='absolute inset-0 bg-black '></div>

      <div className='relative mx-auto max-w-screen-xl px-4 flex justify-center sm:justify-start h-screen items-center sm:px-8 lg:px-20'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='fade-up-1 text-3xl font-extrabold text-white sm:text-5xl'>
           
            Images with Creators.
          </h1>

          <p className='fade-up-2 mt-4 max-w-lg text-white sm:text-xl/relaxed'>
          Creators is a user-friendly image editor that lets you effortlessly create and edit images using AI. Start today and begin crafting stunning visuals with ease.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4 text-center'>
            <Link href='/create'>
              <Button className='px-12 py-3 border-2 hover:to-blue-800'>
                Get Started
              </Button>
            </Link>
            <Link href='/'>
              <Button className='py-3 text-white' variant='link'>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
