import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
export type MealObject = {
    name: string;
    amount: number;
};

// Define the initial state using that type
const initialState: { meals: MealObject[], totalPrice: number } = {
    meals: [],
    totalPrice: 0,
};

const orderSlice = createSlice({
    name: 'order',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    /* eslint-disable no-param-reassign */
    reducers: {
        addMeal: (state, action: PayloadAction<{ mealName: string, price: number }>) => {
            const orderObject = state.meals.find((meal) => meal.name === action.payload.mealName);
            if (!orderObject) {
                state.meals.push({ name: action.payload.mealName, amount: 1 });
            } else {
                orderObject!.amount += 1;
            }
            state.totalPrice += action.payload.price;
        },
        removeMeal: (state, action: PayloadAction<{ mealName: string, price: number }>) => {
            const orderObject = state.meals.find((mealObj) => mealObj.name === action.payload.mealName);
            if (!orderObject) {
                // eslint-disable-next-line no-useless-return
                return;
            // eslint-disable-next-line no-else-return
            } else {
                if (orderObject.amount > 1) {
                    orderObject.amount -= 1;
                } else {
                    state.meals = state.meals.filter((orderObj) => orderObj.name !== action.payload.mealName);
                }
                state.totalPrice -= action.payload.price;
            }
        },
        initializeOrder: (state, action: PayloadAction<{ meals: MealObject[], totalPrice: number }>) => {
            state.meals = action.payload.meals;
            state.totalPrice = action.payload.totalPrice;
        },
        /* eslint-enable no-param-reassign */
    },
});

export const { addMeal, removeMeal, initializeOrder } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrder = (state: RootState) => state.order.meals;

export default orderSlice.reducer;
