import { MainLayout } from '@/components/Layout/MainLayout';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <MainLayout>
      <section className={styles['about']}>
        <h1>Dog Hotel</h1>
      </section>
    </MainLayout>
  );
}
