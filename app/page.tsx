import Image from 'next/image';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import ReviewCarousel from '@/components/ReviewCarousel';

export default function Home() {
    return (
        <main>
            <section>
                <PhotoCarousel />
            </section>
            <section>
                <h2 className='my-10 mx-auto text-center text-2xl sm:text-3xl text-[#B47C03] uppercase'>References <i>&</i> reviews</h2>
                <Image src='/icons/moon-divider.png' width={70} height={19} alt='moon divider image' className='mx-auto' />
                <ReviewCarousel />
            </section>
        </main>
    );
}
