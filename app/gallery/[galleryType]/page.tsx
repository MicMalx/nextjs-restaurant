import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GalleryWrapper as Gallery } from '@/components/GalleryWrapper';

const restaurantImgArray = [
    '/restaurant/restaurant1.jpg',
    '/restaurant/restaurant2.jpg',
    '/restaurant/restaurant3.jpg',
    '/restaurant/restaurant4.jpg',
];

const mealsImgArray = [
    '/meals/meals01.jpg',
    '/meals/meals02.jpg',
    '/meals/meals03.jpg',
    '/meals/meals04.jpg',
    '/meals/meals05.jpg',
    '/meals/meals06.jpg',
    '/meals/meals07.jpg',
    '/meals/meals08.jpg',
    '/meals/meals09.jpg',
    '/meals/meals10.jpg',
    '/meals/meals11.jpg',
    '/meals/meals12.jpg',
    '/meals/meals13.jpg',
    '/meals/meals14.jpg',
    '/meals/meals15.jpg',
];

const kitchenImgArray = [
    '/kitchen/kitchen1.jpg',
    '/kitchen/kitchen2.jpg',
    '/kitchen/kitchen3.jpg',
    '/kitchen/kitchen4.jpg',
    '/kitchen/kitchen5.jpg',
    '/kitchen/kitchen6.jpg',
];

const cateringImgArray = [
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

const acceptedGroups = ['restaurant', 'meals', 'kitchen', 'catering'];

export default async function GalleryType({ params }: { params: { galleryType: string } }) {
    const { galleryType } = params;

    if (!acceptedGroups.includes(galleryType)) {
        notFound();
    }

    let imgArray: string[];
    switch (galleryType) {
        case 'restaurant':
            imgArray = restaurantImgArray;
            break;
        case 'meals':
            imgArray = mealsImgArray;
            break;
        case 'kitchen':
            imgArray = kitchenImgArray;
            break;
        case 'catering':
            imgArray = cateringImgArray;
            break;
        default:
            imgArray = [];
            break;
    }

    return (
        <main className='w-4/5 xl:w-[1200px] mx-auto bg-white min-h-content'>
            <h1 className='text-2xl font-bold mt-10 capitalize'><Link href='/gallery'>Gallery</Link> / {galleryType}</h1>
            <Image
                src='/icons/section-starter.png'
                alt='section starter image'
                width={67}
                height={15}
                className='mt-5 mb-10'
            />
            <Gallery
                gallerySrcArray={imgArray!}
            />
        </main>
    );
}
