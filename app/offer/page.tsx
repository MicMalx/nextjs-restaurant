'use client';

import Image from 'next/image';
import { Gallery } from '@/components/Gallery';

const gallerySrcArray = [
    '/catering/catering01.jpg',
    '/catering/catering02.jpg',
    '/catering/catering03.jpg',
    '/catering/catering04.jpg',
    '/catering/catering05.jpg',
    '/catering/catering06.jpg',
    '/catering/catering07.jpg',
    '/catering/catering08.jpg',
    '/catering/catering09.jpg',
    '/catering/catering10.jpg',
    '/catering/catering11.jpg',
    '/catering/catering12.jpg',
    '/catering/catering13.jpg',
    '/catering/catering14.jpg',
];

export default function Offer() {
    return (
        <main className='w-4/5 xl:w-[1200px] mx-auto'>
            <h1 className='xl:text-2xl font-bold mt-10 capitalize'>Occasional parties / catering</h1>
            <Image
                src='/icons/section-starter.png'
                alt='section starter image'
                width={67}
                height={15}
                className='mt-5 mb-10'
            />
            <section>
                <p className='indent-10'>
                    Professional organization of meetings is a great art.
                    Our Restaurant is a guarantee of a successful meeting with an exquisite menu and impeccable service.
                    We provide support both at small family gatherings and during the largest conferences and balls.
                    Regardless of the scale of the event, we make every effort to meet your needs and exceed your wildest expectations.
                    Organizing catering in even the most non-standard places is not a problem for us.
                </p>
                <br />
                <p className='indent-10'>
                    Specialized chefs, coordinators, professional waiters and trusted suppliers give you a sense of peace and confidence.
                    What characterizes our activities is the lack of routine.
                    Together with you, we are constantly looking for new, exciting ideas.
                </p>
                <br />
                <p className='indent-10'>
                    The entire team is involved in the menu creation process so that the effect remains in the memories of you and your guests forever.
                    It is our pure pleasure to implement the concept prepared together with you.
                    Our energy and passion combined with professionalism and state-of-the-art
                    technical facilities ensure that the most sophisticated concept will be implemented perfectly.
                    All this for your joy and our satisfaction.
                </p>
                <br />
                <p className='indent-10'>
                    Prosta Restaurant & Catering does not only provide services for large corporate events.
                    We also have extensive experience in organizing various private parties - for family or friends.
                    We are characterized by flexibility and the ability to adapt to the expectations of each client.
                    We are happy to provide our recommendations and offer non-standard solutions to make your celebration memorable.
                </p>
                <br />
                <h2 className='font-bold mb-5'>We are perfect for:</h2>
                <p>- Birthday and anniversary parties</p>
                <p>- Parties at home or in the garden</p>
                <p>- Hen and stag parties</p>
                <p>- Any other occasion</p>
                <h2 className='font-bold mt-10 mb-5'>More information and reservations:</h2>
                <p>Manager</p>
                <p>Phone Number: 661 571 373 | E-mail: restaurant@gmail.com</p>
            </section>
            <Gallery
                gallerySrcArray={gallerySrcArray}
                imgRenderer={(fn, galleryArray) => galleryArray.map((src, index) => (
                    <div
                        className='relative w-[170px] h-[170px]'
                        key={src}
                        onClick={() => fn(src, index)}
                    >
                        <Image
                            src={src}
                            alt='meal image'
                            fill={true}
                            className='object-cover cursor-pointer'
                        />
                    </div>
                ))}
            />
        </main>
    );
}
