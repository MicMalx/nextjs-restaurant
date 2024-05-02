'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

type Props = {
    gallerySrcArray: string[];
    imgRenderer: (fn: (src: string, index: number) => void, gallerySrcArray: string[]) => ReactNode;
};

export function Gallery({ gallerySrcArray, imgRenderer }: Props) {
    const [arrayPointer, setArrayPointer] = useState(0);
    const [imgSrc, setImgSrc] = useState('');
    const [showImg, setShowImg] = useState(false);

    const showImageHandler = (src: string, pointer: number) => {
        setArrayPointer(pointer);
        setImgSrc(src);
        setShowImg(true);
    };

    const changeImageHandler = (showNext: boolean) => {
        if (showNext) {
            if (arrayPointer === (gallerySrcArray.length - 1)) {
                setImgSrc(gallerySrcArray[0]);
                setArrayPointer(0);
            } else {
                setImgSrc(gallerySrcArray[arrayPointer + 1]);
                setArrayPointer((prevState) => prevState + 1);
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (arrayPointer === 0) {
                setImgSrc(gallerySrcArray[gallerySrcArray.length - 1]);
                setArrayPointer(gallerySrcArray.length - 1);
            } else {
                setImgSrc(gallerySrcArray[arrayPointer - 1]);
                setArrayPointer((prevState) => prevState - 1);
            }
        }
    };

    return (
        <>
            <section className='flex justify-center sm:justify-start gap-5 flex-wrap my-10'>
                {imgRenderer(showImageHandler, gallerySrcArray)}
            </section>
            {showImg ? (
                <section className='hidden sm:block'>
                    <div
                        onClick={() => setShowImg(false)}
                        className='fixed top-0 left-0 z-20 h-full w-full bg-black opacity-85'
                    >
                    </div>
                    <div
                        onClick={() => setShowImg(false)}
                        className='z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[1000px] items-center'
                    >
                        <div
                            className='self-end cursor-pointer'
                        >
                            <span className='block w-[25px] h-[3px] my-[5px] rounded bg-white translate-y-[8px] rotate-45'></span>
                            <span className='block w-[25px] h-[3px] my-[5px] rounded bg-white opacity-0'></span>
                            <span className='block w-[25px] h-[3px] my-[5px] rounded bg-white translate-y-[-8px] -rotate-45'></span>
                        </div>
                        <div onClick={(e) => { e.stopPropagation(); }}>
                            <Image
                                src={imgSrc}
                                alt='gallery big image'
                                width={900}
                                height={900}
                                className='rounded-md'
                            />
                        </div>
                        <div
                            className='flex gap-10 text-2xl text-white'
                            onClick={(e) => { e.stopPropagation(); }}
                        >
                            <button type='button' onClick={() => changeImageHandler(false)}>&lt;</button>
                            <button type='button' onClick={() => changeImageHandler(true)}>&gt;</button>
                        </div>
                    </div>
                </section>
            ) : null }
        </>
    );
}
