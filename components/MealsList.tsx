'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import StoreProvider from '@/lib/StoreProvider';
import { MealItem } from './MealItem';
import { useAppSelector } from '@/lib/hooks';

export type MealType = 'mainCourse' | 'soups' | 'kidsMenu' | 'desserts';
export type MealFromAPI = {
    name: string;
    description: string;
    price: number;
    type: MealType;
};

type MealsListProps = {
    mode?: 'summary' | 'order';
    menuPart?: MealType,
    allMeals: MealFromAPI[],
    isUserLoggedIn: boolean
};

function MealsList({ mode, menuPart, allMeals, isUserLoggedIn }: MealsListProps) {
    const { meals: selectedMeals } = useAppSelector((state) => state.order);
    const { totalPrice } = useAppSelector((state) => state.order);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const localStorageOrderData = localStorage.getItem('orderObjectArray');
        if ((pathname === '/order') && !localStorageOrderData) {
            router.push('/');
        }
    }, [selectedMeals, pathname, router]);

    const createMealsForSummary = () => selectedMeals.map((meal) => {
        const mealFromProps = allMeals.find((singleMeal) => singleMeal.name === meal.name)!;
        return {
            name: mealFromProps.name,
            description: mealFromProps.description,
            price: mealFromProps.price,
            type: mealFromProps.type,
        };
    });

    const purchaseHandler = () => {
        router.push(isUserLoggedIn ? '/order' : '/auth');
    };

    const mealsToRender = mode ? createMealsForSummary() : allMeals;

    return (
        <section className='text-center'>
            {mode ? <div className='mt-[50px] text-[#C59938] text-2xl font-bold '>Order Summary</div> : null}
            {mealsToRender.map((meal) => {
                if (meal.type === menuPart || mode) {
                    return (
                        <MealItem
                            key={meal.name}
                            name={meal.name}
                            ings={meal.description}
                            price={meal.price}
                            mode={!!mode}
                        />
                    );
                }
                return null;
            })}
            {mode === 'summary' && (
                <>
                    <div className='mt-5 text-xl'>Total Price: {totalPrice!.toFixed(1)} $</div>
                    <button
                        className='p-2.5 m-2.5 font-bold text-xl text-[#C59938] disabled:text-[#CCC] disabled:cursor-not-allowed'
                        onClick={purchaseHandler}
                        disabled={isUserLoggedIn && !selectedMeals.length}
                        type='button'
                    >
                        {isUserLoggedIn ? 'ORDER NOW' : 'LOGIN TO ORDER'}
                    </button>
                </>
            )}
            {mode === 'order' && <div className='mt-5 text-xl'>Total Price: {totalPrice!.toFixed(1)} $</div>}
        </section>
    );
}

type ProviderProps = Required<Pick<MealsListProps, 'mode'>> & MealsListProps;

/* eslint-disable react/jsx-props-no-spreading */
export function MealsListWithProvider(props: ProviderProps) {
    const { mode, ...restProps } = props;
    return (
        <StoreProvider>
            <div>
                {mode === 'summary' ? <MealsList {...restProps} /> : null}
                <MealsList {...props} />
            </div>
        </StoreProvider>
    );
}
/* eslint-enable react/jsx-props-no-spreading */
