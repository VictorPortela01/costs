import styles from './Home.module.css'
import savings from '../../image/savings.svg'
import LinkButton from '../layouts/LinkButton.jsx';

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1 className={styles.home_container.h1}>Bem vindo ao <span className={styles.home_container.span}>Costs</span></h1>
      <p className={styles.home_container.p}>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto"/>
      <img className={styles.home_container.img} src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
