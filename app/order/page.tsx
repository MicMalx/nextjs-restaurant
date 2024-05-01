import axios from 'axios';
import { MealFromAPI, MealsListWithProvider as MealsList } from '@/components/MealsList';

export default async function Order() {
    let meals: MealFromAPI[];
    try {
        meals = (await axios.get<{ meals: MealFromAPI[] }>('https://friendly-frog-slippers.cyclic.app/api/meals')).data.meals;
    } catch (err) {
        return <div>Can not load meals try again later...</div>;
    }

    return (
        <section>
            <MealsList mode='order' allMeals={meals} isUserLoggedIn={true} />
        </section>
    );
}
