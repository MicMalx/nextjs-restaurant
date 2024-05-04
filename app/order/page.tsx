import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MealFromAPI, MealsListWithProvider as MealsList } from '@/components/MealsList';
import { OrderForm } from '@/components/OrderForm';

export default async function Order() {
    const token = cookies().get('token');
    if (!token?.value) {
        redirect('/auth');
    }

    let meals: MealFromAPI[];
    try {
        meals = (await axios.get<{ meals: MealFromAPI[] }>('https://friendly-frog-slippers.cyclic.app/api/meals')).data.meals;
    } catch (err) {
        return <div>Can not load meals try again later...</div>;
    }

    return (
        <main>
            <section>
                <MealsList mode='order' allMeals={meals} isUserLoggedIn={true} />
            </section>
            <OrderForm />
        </main>
    );
}
