import { addMeal, removeMeal } from '@/lib/features/order/orderSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

type Props = {
    name: string;
    ings: string;
    price: number;
    mode: boolean;
};

export function MealItem(props: Props) {
    const { meals } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();
    const meal = meals.find((orderObj) => orderObj.name === props.name);

    let mealItem = null;
    if (!props.mode) {
        mealItem = (
            <div className='mx-auto text-center my-5 w-full sm:w-[600px] border-2 border-black'>
                <div className='mt-2.5 text-2xl text-[#C59938] font-extrabold'>{props.name}</div>
                <div className='p-4 text-lg'>{props.ings}</div>
                <div className='text-2xl text-[#202935]'>{props.price} $</div>
                <div className='my-5'>
                    <button
                        className={'inline-block text-sm p-1 mx-1 w-[100px] border border-[#AA6817] bg-white hover:bg-[#C59938] '
                            + 'disabled:bg-[#AC9980] disabled:border-[#7E7365] disabled:text-[#ccc] disabled:cursor-not-allowed'}
                        onClick={() => dispatch(removeMeal({ mealName: props.name, price: props.price }))}
                        disabled={!meal}
                        type='button'
                    >
                        Remove
                    </button>
                    <button
                        className='inline-block text-sm p-1 mx-1 w-[100px] border border-[#AA6817] bg-white hover:bg-[#C59938]'
                        onClick={() => dispatch(addMeal({ mealName: props.name, price: props.price }))}
                        type='button'
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    } else if (props.mode && meal?.amount) {
        mealItem = (
            <div className='flex-col sm:flex-row w-full px-[10%] p-1.5 border-t-2 border-t-[#C59938] flex justify-center align-center'>
                <div className='flex items-center justify-center text-[#C59938] font-extrabold w-full sm:w-[20%]'>{meal.amount} x {props.name}</div>
                <div className='flex items-center justify-center text-lg w-full sm:w-[20%]'>{props.ings}</div>
                <div className='flex items-center justify-center text-[#202935] w-full sm:w-[20%]'>{props.price}$</div>
                <div className='flex items-center justify-center gap-2 text-center p-1.5 cursor-pointer w-full sm:w-[20%]'>
                    <button
                        className='p-1.5 w-[100px] border border-[#AA6817] cursor-pointer bg-white hover:bg-[#C59938] active:bg-[#C59938]'
                        onClick={() => dispatch(removeMeal({ mealName: props.name, price: props.price }))}
                        type='button'
                    >
                        Remove
                    </button>
                    <button
                        className='p-1.5 w-[100px] border border-[#AA6817] cursor-pointer bg-white hover:bg-[#C59938] active:bg-[#C59938]'
                        onClick={() => dispatch(addMeal({ mealName: props.name, price: props.price }))}
                        type='button'
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
    return mealItem;
}
