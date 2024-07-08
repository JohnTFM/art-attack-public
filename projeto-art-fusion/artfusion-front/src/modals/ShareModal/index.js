import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import user from '../../assets/images/man16_117721.svg';
import exit from '../../assets/icons/delete-circled-outline.svg';
import ModalOverlayContainer from '../../components/Containers/ModalOverlayContainer'
import ContainerTitleExitEditPerfil from '../../components/Containers/ContainerTitleExitEditPerfil'
import EditProfileModalContainer from '../../components/Containers/EditProfileModalContainer'
import GeneralAccess from '../../components/GeneralAccess';

const IconExit = styled.img`
  width: 46px;
  height: 46px;
  display: flex;
  margin: 0px;
`;

function ShareModal() {
  return (
    <ModalOverlayContainer>
        <EditProfileModalContainer>
        <ContainerTitleExitEditPerfil>

            <Title
                align={"left"}
            ><strong>Compartilhar Nome da Arte Nome da Arte Nome da Arte</strong>
            </Title>

            <IconExit src={exit} alt="exit" />
        </ContainerTitleExitEditPerfil>

        <Title size="20px" align="left"> Pessoas com acesso </Title>



        <Title size="20px" align="left"> Acesso geral </Title>

        <GeneralAccess></GeneralAccess>

        </EditProfileModalContainer>
    </ModalOverlayContainer>
  );
}

export default ShareModal;
