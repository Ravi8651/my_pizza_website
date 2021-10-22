import React from 'react';
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>{pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(toppings => toppings).join(', ')}</p>

                </div>
                <div className={styles.otherPizzasWrapper}>
                    {otherPizzas.map(otherpizza => {
                        return(
                            <div className={styles.otherPizzas} key={otherpizza.id} >
                                <Link href={"/" + otherpizza.slug}><a>
                                <img src={otherpizza.image} alt={otherpizza.name} />
                                <p>{otherpizza.name}</p>    
                                </a></Link>
                            </div>
                        )
                    })

                    }
                </div>
                
            </div>
        </div>

    
    )
}

export const getStaticPaths = async () => {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'A delocious cheese pizza made with our finest  tomato sauce',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80',
            price: 9.99,
        },
        {
            id: '2',
            name: 'Meat Feast',
            slug: 'meat-feast',
            description: 'A wide selection of succulent meats for only the mightiest of meat lovers.',
            toppings: ['ham','bacon','pepperoni','sausage'],
            image: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            price: 15.99,
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme',
            description:'A succulent supreme for only the finest of pizza fans.',
            toppings: ['olives','pinapple','ham','pepperoni'],
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80',
            price: 12.99,
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            description: 'The absolute classic  the king of pizza.bow to his delicious pepperoni highness',
            toppings: ['pepperoni'],
            image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            price: 14.99,
        },
        {
            id: '5',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            description: 'Somebody smokin! This succulent pizza is filled with sausage goodness.',
            toppings: ['sausage','tomato','olive'],
            image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
            price: 9.90,
        },
        {
            id: '6',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-sausage-pizza',
            description: 'for the absolute and lad who Loves a morning breakfast on a pizza',
            toppings: ['sausage','egg'],
            image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
            price: 19.99,
        },
    ]
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);
    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    }
    const paths = pizzas.map(pizza => ({
        params: {slug: '${pizza.slug}'}

    }));
    return{
        paths,
        fallback: false,
    }
}
export const getStaticProps = async ({params}) =>{

}