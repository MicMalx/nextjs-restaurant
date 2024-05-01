import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import orderSlice, { addMeal, removeMeal } from './features/order/orderSlice';

const listenerMiddleware = createListenerMiddleware();

const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
    matcher: isAnyOf(addMeal, removeMeal),
    effect: (_action, listenerAPI) => {
        const { order } = listenerAPI.getState();
        if (order.meals.length) {
            localStorage.setItem('orderObjectArray', JSON.stringify(order));
        } else {
            localStorage.removeItem('orderObjectArray');
        }
    },
});

export const makeStore = () => configureStore({
    reducer: { order: orderSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
