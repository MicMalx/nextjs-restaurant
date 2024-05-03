import Image from 'next/image';
import Link from 'next/link';

type Props = {
    url: string;
    imgSrc: string;
    label: string;
};

export default function MealType({ url, imgSrc, label }: Props) {
    return (
        <Link href={url} className='hover:text-golden-500'>
            <Image
                src={imgSrc}
                height={178}
                width={240}
                alt='menu part image'
            />
            <div className='mt-4 self-center text-center font-bold'>{label}</div>
        </Link>
    );
}
