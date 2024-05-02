type Props = {
    meals: {
        amount: number;
        id: string;
        name: string;
    }[];
    price: number;
};

export default function Order({ meals, price }: Props) {
    const mealOutput = meals.map((meal) => (
        <span
            className='inline-block ml-2 border border-[#C59938] py-0.5 px-2'
            key={meal.name}
        >
            {meal.name}({meal.amount})
        </span>
    ));

    return (
        <div className='w-4/5 shadow-[#C59938] shadow border border-[#C59938] p-2.5 my-2.5 mx-auto'>
            <p>Meals:{mealOutput}</p>
            <p className='mt-0.5'>Price: <strong>{price.toFixed(2)} $</strong></p>
        </div>
    );
}
