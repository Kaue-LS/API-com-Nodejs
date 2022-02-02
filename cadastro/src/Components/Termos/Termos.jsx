import { Link } from 'react-router-dom'
import * as S from './Styled'
export default function Termos(){
    return(
        <S.Termos>
          <h2>Termos e condições:</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellendus consequuntur reiciendis, distinctio ducimus amet aspernatur inventore quidem fugiat soluta nisi dolorum aliquam labore saepe eveniet modi? Magnam, nobis molestias?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellendus consequuntur reiciendis, distinctio ducimus amet aspernatur inventore quidem fugiat soluta nisi dolorum aliquam labore saepe eveniet modi? Magnam, nobis molestias?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellendus consequuntur reiciendis, distinctio ducimus amet aspernatur inventore quidem fugiat soluta nisi dolorum aliquam labore saepe eveniet modi? Magnam, nobis molestias?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repellendus consequuntur reiciendis, distinctio ducimus amet aspernatur inventore quidem fugiat soluta nisi dolorum aliquam labore saepe eveniet modi? Magnam, nobis molestias?
          </p>

          <Link to={"/cadastrar"}><button>Voltar</button></Link>
        </S.Termos>
    )
}