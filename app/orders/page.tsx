import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Order from '@/components/Order';

type OrderData = {
    address: string;
    id: string;
    meals: {
        amount: number;
        id: string;
        name: string;
    }[];
    name: string;
    paymentMethod: string;
    phoneNumber: string;
    price: number;
    purchaserId: string;
};

export default async function Orders() {
    const token = cookies().get('token');
    if (!token) {
        redirect('/auth');
    }

    let orders: OrderData[];
    try {
        orders = (await axios.get<{ orders: OrderData[] }>(
            'https://friendly-frog-slippers.cyclic.app/api/orders/user',
            { headers: { Authorization: `Bearer ${token?.value}` } },
        )).data.orders;
    } catch (err) {
        return <div>Can not load orders try again later...</div>;
    }
    return (
        <section className='min-h-[400px]'>
            <h2 className='my-[30px] text-[#C59938] text-2xl font-bold text-center'>Orders History</h2>
            {orders.map((order) => (
                <Order
                    key={order.id}
                    meals={order.meals}
                    price={order.price}
                />
            ))}
        </section>
    );
}
