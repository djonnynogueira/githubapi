import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (
    <S.Wrapper>
            
            <S.WrapperImage  alt="avatar" 
               
            src="https://avatars.githubusercontent.com/u/13878534?v=4" />
            
          <S.WrapperInfoUser>
              <div>
                <h1>Djonny Nogueira</h1>
                <S.WrapperUsername>
                    <h3>Username:</h3>
                    <span>djonny</span>
                </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds: </h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings: </h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
    </S.Wrapper>

    )
}

export default Profile