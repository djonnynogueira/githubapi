import React, { useState } from 'react'
import * as S from './styled'
import useGitHub from '../../hooks/github-hooks'


const Header = () =>{

    const {getUser} = useGitHub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () =>{
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        
        <header>
            <S.Wrapper>
            <input placeholder='Digite o username para pesquisa...' type="text"
            onChange={(event) => setUsernameForSearch(event.target.value)}
            />
           
            <button onClick={submitGetUser}><span>Buscar</span>
            </button>

            </S.Wrapper>
        </header>
    )
}

export default Header