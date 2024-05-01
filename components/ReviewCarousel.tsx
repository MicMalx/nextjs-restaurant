'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import clsx from 'clsx';

export default function ReviewCarousel() {
    return (
        <Carousel
            className='[&>div]:!overflow-visible py-10 relative z-10 mx-auto w-4/5 lg:w-[1000px]'
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            renderIndicator={(onClickHandler, isSelected, index, label) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                    className={clsx(
                        { 'bg-[#B47C03]': isSelected },
                        { 'bg-black': !isSelected },
                        'w-[10px] h-[10px] mt-4 mx-2 inline-block cursor-pointer relative z-20 top-10',
                    )}
                    onClick={onClickHandler}
                    value={index}
                    key={index}
                    aria-label={`${label} ${index + 1}`}
                />
            )}
        >
            <div>
                <p>
                    My girlfriend and I chose this restaurant for dinner, and we easily made a reservation the day before.
                    The restaurant is very elegant and the table was already prepared.
                    We chose turkey and tagliatelle with oyster mushroom and chicken, and lemonade. Large portions, very tasty and nicely presented.
                    A large variety of ingredients, the chefs definitely do not skimp on good quality products. Adequate price-quality ratio.
                    I definitely recommend it!
                </p>
                <p>Marc (Google)</p>
                <p>June 2022</p>
            </div>
            <div>
                <p>
                    I recommend it with all my heart and stomach, the food is delicious, prepared from high-quality products.
                    Very professional, nice and always present service. They know how to match wine to expectations and meals, and they know how to serve it.
                    I will definitely come back here.
                </p>
                <p>Emma (Google)</p>
                <p>May 2022</p>
            </div>
            <div>
                <p>
                    Delicious food, friendly service, rich breakfast offer. Everything fresh and tasty.
                    The white chocolate mousse won my heart, it was amazing. A place worth recommending.
                </p>
                <p>Olivia (Google)</p>
                <p>March 2022</p>
            </div>
        </Carousel>
    );
}
