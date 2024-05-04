import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    return (
        <main className='w-4/5 xl:w-[1200px] mx-auto bg-white min-h-content mb-10'>
            <h1 className='text-2xl font-bold mt-10'>Gallery</h1>
            <Image
                src='/icons/section-starter.png'
                alt='section starter image'
                width={67}
                height={15}
                className='mt-5 mb-10'
            />
            <section className='mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-10'>
                <Link href='gallery/restaurant' className='hover:text-golden-500'>
                    <Image
                        src='/restaurant/restaurant1.jpg'
                        alt='restaurant image'
                        width={370}
                        height={270}
                        className='cursor-pointer'
                    />
                    <div className='mt-4 self-center text-center font-bold'>Restaurant</div>
                </Link>
                <Link href='gallery/meals' className='hover:text-golden-500'>
                    <Image
                        src='/meals/meals02.jpg'
                        alt='restaurant image'
                        width={370}
                        height={270}
                        className='cursor-pointer'
                    />
                    <div className='mt-4 self-center text-center font-bold'>Meals</div>
                </Link>
                <Link href='gallery/kitchen' className='hover:text-golden-500'>
                    <Image
                        src='/kitchen/kitchen2.jpg'
                        alt='restaurant image'
                        width={370}
                        height={270}
                        className='cursor-pointer'
                    />
                    <div className='mt-4 self-center text-center font-bold'>Kitchen</div>
                </Link>
                <Link href='gallery/catering' className='hover:text-golden-500'>
                    <Image
                        src='/catering/catering07.jpg'
                        alt='restaurant image'
                        width={370}
                        height={270}
                        className='cursor-pointer'
                    />
                    <div className='mt-4 self-center text-center font-bold'>Catering</div>
                </Link>
            </section>
        </main>
    );
}
