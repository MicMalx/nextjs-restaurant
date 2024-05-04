import Image from 'next/image';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import ReviewCarousel from '@/components/ReviewCarousel';

export default function Home() {
    return (
        <main className='min-h-content'>
            <section>
                <PhotoCarousel />
            </section>
            <section className='mb-10'>
                <h2 className='my-10 mx-auto text-center text-2xl sm:text-3xl text-golden-700 uppercase'>References <i>&</i> reviews</h2>
                <Image src='/icons/moon-divider.png' width={70} height={19} alt='moon divider image' className='mx-auto' />
                <ReviewCarousel />
            </section>
        </main>
    );
}
