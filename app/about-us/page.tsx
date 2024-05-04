import Image from 'next/image';

export default function AboutUs() {
    return (
        <main className='w-4/5 xl:w-[1200px] mx-auto min-h-content'>
            <h1 className='text-2xl font-bold mt-10'>About us</h1>
            <Image
                src='/icons/section-starter.png'
                alt='section starter image'
                width={67}
                height={15}
                className='mt-5 mb-10'
            />
            <div className='flex flex-wrap sm:flex-nowrap gap-5 mb-5'>
                <section className='sm:basis-2/3'>
                    <p className='font-bold'>Our restaurant is a new definition of the pleasure of... taste.</p>
                    <br />
                    <p>
                        Our restaurant is a place that adapts to every hour.
                        During the day, it is conducive to an urban lifestyle, business lunches and meetings with loved ones.
                        In the evening, it is the perfect choice for a romantic dinner or a moment of relaxation with a glass of your favorite wine.
                        In a tasteful and quiet place, you can watch the bustle of Old Town from behind the glass.
                    </p>
                    <br />
                    <p>
                        Our restaurant is a place where the latest culinary trends collide with many years of experience of outstanding chefs.
                        Our menu is based on seasonal products. We cooperate with many local suppliers.
                        We are sure that fresh products delivered to us every day come from
                        an ecological source and their delivery is preceded by appropriate selection.
                        By following such procedures, we can guarantee the highest quality of the dishes served,
                        which have already been distinguished several times in the "Gault&Millau" guide to the best restaurants and hotels around the world.
                        We are also proud of the quality certificate awarded to us by you via the Trip Advisor portal.
                        This is the culmination of our efforts and a great motivation for further activities. Thank you very much!
                    </p>
                    <br />
                    <p>
                        Every customer comment is an inspiration for us.
                        Thanks to this, we can constantly surprise you, dear guests, with spontaneous dishes,
                        seasonal dishes and suggestions for new culinary trends.
                    </p>
                    <br />
                    <p className='text-right font-bold'>„You can not eat at all, but you can't eat badly.”</p>
                    <p className='text-right font-bold'>Salvador Dali</p>
                </section>
                <section className='sm:basis-1/3 flex flex-wrap justify-center sm:content-start gap-5'>
                    <div className='w-[170px] h-[170px] relative'>
                        <Image
                            src='/meals/meals08.jpg'
                            alt='meal image'
                            fill={true}
                            className='object-cover'
                        />
                    </div>
                    <div className='w-[170px] h-[170px] relative'>
                        <Image
                            src='/restaurant/restaurant1.jpg'
                            alt='meal image'
                            fill={true}
                            className='object-cover'
                        />
                    </div>
                    <div className='w-[170px] h-[170px] relative'>
                        <Image
                            src='/kitchen/kitchen1.jpg'
                            alt='meal image'
                            fill={true}
                            className='object-cover'
                        />
                    </div>
                    <div className='w-[170px] h-[170px] relative'>
                        <Image
                            src='/meals/meals13.jpg'
                            alt='meal image'
                            fill={true}
                            className='object-cover'
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
