import Header from '../components/Header';
import Footer from '../components/Footer';
import consultacep from '../assets/consultacep.jpeg';
import moviepopcorn from '../assets/moviepopcorn.jpeg';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>Olá! Sou Alicy Rodrigues, uma desenvolvedora júnior apaixonda por tecnologia e soluções inovadoras.</p>
        </section>
        <section id="habilidades">
            <h3>Principais habilidades</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Figma</li>
            </ul>
        </section>
        <section>
            <h3>Formação acadêmica e Certificações</h3>
            <ul>
                <li>Graduação em Análise e Desenvolvimento de Sistemas - IFRO/4° Período</li>
                <li>Curso de Programação Web - Udemy</li>
                <li>Curso React - Udemy</li>
            </ul>
        </section>
        <section id="projetos">
          <h2>Projetos</h2>
          <p>Consulta de CEP:</p>
          <img src={consultacep} alt='Consulta CEP' className='image'/>
          <a href='https://github.com/Alicyrc/Programacao-Web-I/tree/9bb83feab0aaddb6d220c4de90cf7f75144f8fd5/consulta-cep/src'>Acesse o diretório aqui</a>
          <p>Movie&Popcorn</p>
          <img src={moviepopcorn} alt='Movie&Popcorn' className='image'/>
          <a href='https://github.com/Alicyrc/Programacao-Web-I/tree/9bb83feab0aaddb6d220c4de90cf7f75144f8fd5/ConsultaFilmes'>Acesse o diretório aqui</a>
        </section>
        <section id="contato">
          <h2>Contato</h2>
          <p>Email: alicyrc@hotmail.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;