import MealType from '@/components/MealType';

export default function Menu() {
    return (
        <main className='w-4/5 xl:w-[1200px] sm:mb-[300px] mx-auto mt-20 bg-white'>
            <h1 className='mb-8 font-bold text-3xl text-center'>MENU</h1>
            <section className='flex flex-col sm:flex-row justify-center items-center gap-10'>
                <MealType url='menu/soups' imgSrc='/mealType/Soup.jpg' label='Soups' />
                <MealType url='menu/kidsMenu' imgSrc='/mealType/KidsMenu.jpg' label='Kids Menu' />
                <MealType url='menu/mainCourse' imgSrc='/mealType/MainCourse.jpg' label='Main Course' />
                <MealType url='menu/desserts' imgSrc='/mealType/Dessert.jpg' label='Desserts' />
            </section>
        </main>
    );
}
