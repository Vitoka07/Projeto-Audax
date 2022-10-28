import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            DATANOW
          </Title>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          
            <Ancora className={activeLink('')} onClick={showSiderbar}>Início</Ancora>
  
            <Ancora className={activeLink('')} onClick={showSiderbar}>Conheça</Ancora>

            <Ancora className={activeLink('')} onClick={showSiderbar}>Funcionalidades</Ancora>

            <Ancora className={activeLink('')} onClick={showSiderbar}>Contato</Ancora>

        </NavLinks>
      </Content>
    </Container>
  )
}
