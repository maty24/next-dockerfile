import Head from 'next/head';
import { Navbar } from '../Navbar';


import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => { //el children son todos los componentes
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Matias</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};