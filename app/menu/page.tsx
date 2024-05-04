import MealType from '@/components/MealType';

export default function Menu() {
    return (
        <main className='w-4/5 xl:w-[1200px] min-h-content pt-navbar mx-auto pb-20 bg-white'>
            <h1 className='my-8 font-bold text-3xl text-center'>MENU</h1>
            <section className='flex flex-col sm:flex-row justify-center items-center gap-10'>
                <MealType url='menu/soups' imgSrc='/mealType/Soup.jpg' label='Soups' />
                <MealType url='menu/kidsMenu' imgSrc='/mealType/KidsMenu.jpg' label='Kids Menu' />
                <MealType url='menu/mainCourse' imgSrc='/mealType/MainCourse.jpg' label='Main Course' />
                <MealType url='menu/desserts' imgSrc='/mealType/Dessert.jpg' label='Desserts' />
            </section>
        </main>
    );
}
