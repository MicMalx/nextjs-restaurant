import axios from 'axios';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { MealFromAPI, MealType, MealsListWithProvider as MealsList } from '@/components/MealsList';

const acceptedGroups = ['mainCourse', 'soups', 'kidsMenu', 'desserts'];

export default async function MealsGroup({ params }: { params: { mealsGroup: string } }) {
    const { mealsGroup } = params;
    const token = cookies().get('token');

    if (!(acceptedGroups).includes(mealsGroup)) {
        notFound();
    }
    let meals: MealFromAPI[];
    try {
        meals = (await axios.get<{ meals: MealFromAPI[] }>('https://friendly-frog-slippers.cyclic.app/api/meals')).data.meals;
    } catch (err) {
        return <div>Can not load meals try again later...</div>;
    }

    return (
        <main className='min-h-content'>
            <MealsList mode='summary' menuPart={mealsGroup as MealType} allMeals={meals} isUserLoggedIn={!!token} />
        </main>
    );
}
