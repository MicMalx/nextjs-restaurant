'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeOrder } from './features/order/orderSlice';

export default function StoreProvider({ children }: { children: ReactNode }) {
    const storeRef = useRef<AppStore>();
    useEffect(() => {
        if (storeRef.current) {
            const orderObjArrayJSON = localStorage.getItem('orderObjectArray');
            if (orderObjArrayJSON) {
                storeRef.current.dispatch(initializeOrder(JSON.parse(orderObjArrayJSON)));
            }
        }
    }, []);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
