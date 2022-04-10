import * as S from '../style/Inicio'
export default function Inicio() {
  return (
    <S.Inicio>
      <S.Painel>
        <h1>Bem vindo a página de cadastro</h1>
        <p>Não esqueça de se cadastrar!</p>
      </S.Painel>
      <S.Body>
        <section>
        <label htmlFor="#quemSomos">Quem Somos?</label>
        <article>
        <p>
        Somo uma página de cadastro de usuários.
        </p>
        </article>
        <label htmlFor="#funcionamento">Como funciona?</label>
        <article>
        <p>
          Caso você já é um cliente, basta fazer o login, mas se você for novo por aqui, faça o cadastro que está no canto superior direito da sua tela.
        </p>
        </article>
        </section>
      </S.Body>
    </S.Inicio>
  );
}
