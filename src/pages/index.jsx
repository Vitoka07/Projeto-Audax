import { Container, Container1, Content, Infos, Titulo, Titulo2, Tituloform, Titulo3, Function, Intro, BotaoCTA, Elemento1, 
  Elemento2, Elemento4,Captcha, NavLinksfim,NavLinksfim1 ,Ancorafim, Botao, CloseSidebarfim, Form, Form1,Linha, Formulario, Formulario1, Formulario2, Campos, Img, Infos1, Infos2, Infos3, Titulo1, Titulo4, Intro1, Intro2, Intro4, Content5, Content2, Elemento3,Content4, Content3, Titulo5, Intro5, Divform, Ancorafim1 } from '../../styles/indexStyle'
import Link from 'next/link'
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { validateConfig } from 'next/dist/server/config-shared';

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function Home() {

  const [user, setUser] = useState({
    nome: '',
    email: '',
    empresa: '',
    assunto: '',
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.nome]: e.target.value });

  const addUser = async e => {
    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        nome: '',
        email: '',
        empresa: '',
        assunto: '',
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }

  function validate(){
    if(!user.email){ return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo email!'})};
    if(!user.nome) {return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'})};
    if(!user.empresa) {return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo empresa!'})};
    if(!user.assunto) {return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo assunto!'})};

    return true;
  }


  return (
   <Container>
     <Content>

      <Infos>
        <Titulo>Esse texto é uma headline super legal</Titulo>

        <Intro>E esse texto aqui acompanha o título. Já que eu preciso falar muito, 
          vou falar sobre Emas. Considerada a maior ave do continente americano, 
          a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?

        </Intro>

          <BotaoCTA>Isso aqui é um CTA</BotaoCTA>

        </Infos>
      <Elemento1>
        <Img src="/images/elemento1.png" alt="logo" />
      </Elemento1>

     </Content>

      <Titulo1> Conheça </Titulo1>
      <Intro1>Ema, também conhecida como nandu, nhandu, guaripé e xuri,
        é uma ave da família Rheidae nativa da América do Sul. Apesar
        de possuir grandes asas, é uma ave não voadora.
      </Intro1>

      <Container1>

      <Infos1>
        <Titulo2>99% dos dados adicionados sem fonte não possuem veracidade.</Titulo2>

        <Intro2>Inclusive esse texto aqui, que não possui fundo científico algum e é 100% errado.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </Intro2>
      <Elemento2>
        <Img src="/images/elemento2.png" alt="logo" />
      </Elemento2>

        </Infos1>
        

        <Infos2>
        <Titulo3>Aumento de 24% em vendas.</Titulo3>

        <Intro2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Intro2>
      <Elemento2>
        <Img src="/images/elemento3.png" alt="logo" />
      </Elemento2>

        </Infos2>
        </Container1>

      <Content2>

      <Infos>
        <Titulo4>Lorem ipsum dolor sit amen</Titulo4>

        <Intro4>ESed ut perspiciatis unde omnis iste natus error sit voluptatem 
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
          ab illo inventore veritatis et quasi.
        </Intro4>

      </Infos>

      <Elemento1>
        <Img src="/images/elemento4.png" alt="logo" />
      </Elemento1>
      
     </Content2>

     <Content3>

<Elemento1>
  <Img src="/images/elemento5.png" alt="logo" />
</Elemento1>

<Infos>

  <Titulo5>Lorem ipsum dolor sit amen</Titulo5>

  <Intro5>ESed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi.
  </Intro5>

</Infos>


</Content3>

<Content5>

      <Infos>
        <Titulo4>Lorem ipsum dolor sit amen</Titulo4>

        <Intro4>ESed ut perspiciatis unde omnis iste natus error sit voluptatem 
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
          ab illo inventore veritatis et quasi.
        </Intro4>

      </Infos>

      <Elemento1>
        <Img src="/images/elemento6.png" alt="logo" />
      </Elemento1>
      
     </Content5>

     <Content4>

<Elemento1>
  <Img src="/images/elemento7.png" alt="logo" />
</Elemento1>

<Infos>

  <Titulo5>Lorem ipsum dolor sit amen</Titulo5>

  <Intro5>ESed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi.
  </Intro5>

</Infos>

</Content4>

<Container1>


</Container1>

<Linha>
        <Img src="/images/linha.png" alt="logo" />
</Linha>


<Form1>

<Form>
  <Tituloform>Sed ut perspiciatis unde omnis iste natus error.</Tituloform>
</Form>

  <Infos>

  {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
  {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

  <form onSubmit={addUser}>
    <label><Formulario1>
      Seu melhor E-mail:
      </Formulario1>
      <input type="text" name="email" placeholder="Forneça seu E-mail" 
      onChange={valueInput}/>
    </label>

  </form>
  <form>
    <label><Formulario1>
      Nome: 
      </Formulario1>
      <input type="text" name="nome" placeholder="Nome completo" 
      onChange={valueInput}/>
    </label>

  </form>
  <form>
    <label><Formulario1>
      Empresa: 
      </Formulario1>
      <input type="text" name="empresa" placeholder="Nome da Empresa" 
      onChange={valueInput} />
    </label>

  </form>
  <form>
    <label>
      <Formulario1>
      Assunto: 
      </Formulario1>
      <input type="text" name="assunto" placeholder="Conte para nós"
      onChange={valueInput}/>
    </label>
  </form>


  <Captcha>
    <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
    />,
  </Captcha>
  <Botao><button  className='btn' type="submit" onClick={validate}>Entrar em Contato</button></Botao>

  </Infos>

</Form1>



<NavLinksfim >
          <NavLinksfim1 >
            <Ancorafim1>DATANOW</Ancorafim1>
          </NavLinksfim1>
            <Ancorafim>Início</Ancorafim>
  
            <Ancorafim>Conheça</Ancorafim>

            <Ancorafim>Funcionalidades</Ancorafim>

            <Ancorafim>Contato</Ancorafim>


</NavLinksfim>


</Container>


   


  )
}
