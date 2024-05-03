'use client';

import Image from 'next/image';
import { Gallery } from './Gallery';

export function GalleryWrapper({ gallerySrcArray }: { gallerySrcArray: string[] }) {
    return (
        <Gallery
            gallerySrcArray={gallerySrcArray}
            imgRenderer={(fn, galleryArray) => galleryArray.map((src, index) => (
                <Image
                    className='cursor-pointer'
                    src={src}
                    alt='restaurant image'
                    width={370}
                    height={247}
                    key={src}
                    onClick={() => fn(src, index)}
                />
            ))}
        />
    );
}
