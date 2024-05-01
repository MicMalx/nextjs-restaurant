'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export function PhotoCarousel() {
    return (
        <Carousel
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
        >
            <div>
                <Image src='/slider/slider1.jpg' height={568} width={1452} alt='first slider image' />
            </div>
            <div>
                <Image src='/slider/slider2.jpg' height={568} width={1452} alt='second slider image' />
            </div>
            <div>
                <Image src='/slider/slider3.jpg' height={568} width={1452} alt='second slider image' />
            </div>
        </Carousel>
    );
}
