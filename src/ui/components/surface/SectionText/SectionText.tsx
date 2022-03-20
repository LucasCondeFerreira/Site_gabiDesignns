import React from "react";
import { styled } from "@mui/material/styles";
import {
  H1White,
  H2White,
  H2Black,
} from "@components/data-display/text/Tittle";
import {
  ParagraphWhite,
  ParagraphBlack,
} from "@components/data-display/text/Paragraph";
import {
  ButtonDois,
  ButtonTres,
  ButtonQuatro,
} from "@components/data-display/button/Button";

const Div = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const DivText1 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  margin: 0;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.primary.main};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0 0;

    > span > h2 {
      text-align: start;
      display: none;
    }
  }
`;

const DivText2 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  padding: 65px 70px;

  border-top: 3.5px #000 solid;
  border-right: 3.5px #000 solid;
  border-bottom: 3.5px #000 solid;
  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    min-height: 320px;

    padding: 65px 20px;

    > span > h2 {
      text-align: start;
      font-size: 2em;
    }

    > p {
      font-size: 1.4em;
    }

    border: none;
    border-bottom: 3.5px #000 solid;
  }
`;

const DivText3 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding: 3rem 0 1.5rem;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.secondary.main};
  > span > h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 240px;

    > span > h1 {
      text-align: center;
      font-size: 1.8em;
    }
  }
`;

const DivImgUm = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  border-top: 3.5px #000 solid;
  border-bottom: 3.5px #000 solid;

  background-image: url(/images/PostalpackageMockup.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;

    min-height: 320px;

    border: none;
  }
`;

const DivContainUm = styled("div")`
  margin: 0 auto;

  > p {
    text-align: center;
  }

  @media (min-width: 561px) {
    width: 820px;
    max-width: 820px;

    padding: 3rem 0 1.5rem;

    > span > h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;
    padding: 3rem 0;

    text-align: center;

    > span > h2 {
      text-align: center;
      font-size: 2.5em;
    }
    > p {
      font-size: 1.3em;
    }
  }
`;

export const SectionTextoUm = () => {
  return (
    <>
      <DivText1>
        <DivContainUm>
          <H2White>DESIGN PODEROSO</H2White>
          <ParagraphWhite>
            Todo negócio precisa de uma marca. E não se trata apenas de ter uma
            boa aparência. Queremos contar a sua história; o que você faz, o que
            você ama, o que você acredita e o que você alcançará. Então, vamos
            destacar sua marca e mostrar exatamente quem você é.
          </ParagraphWhite>
        </DivContainUm>
      </DivText1>
    </>
  );
};

export const SectionTextoDois = () => {
  return (
    <Div>
      <DivText2>
        <H2Black>
          BRANDiNG É <br /> MAiS QUE UMA LOGO
        </H2Black>
        <ParagraphBlack>
          Trata-se de tornar o seu negócio memorável e coerente. Uma grande
          marca tem a capacidade de fazer com que seus clientes confiem no que
          você tem a oferecer - então dê o salto e vamos renomear sua empresa.
          Minha promessa para você é tornar esse processo de branding livre de
          estresse e uma experiência agradável do início ao fim.
        </ParagraphBlack>
      </DivText2>
      <DivImgUm />
    </Div>
  );
};

export const SectionTextoTres = () => {
  return (
    <>
      <DivText3>
        <H1White>
          VOCÊ ESTÁ PRONTO <br /> PARA TER A MELHOR LOGO?
        </H1White>
        <ButtonDois href="https://google.com.br" text={"COMPRE AGORA"} />
      </DivText3>
    </>
  );
};

// SectionTextoQuatro Style

const DivText4 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding: 12rem 0 6rem 12.5rem;

  @media (max-width: 768px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-left: 17%;
  }

  background-color: ${({ theme }) => theme.palette.primary.light};
  border-bottom: 8rem ${({ theme }) => theme.palette.secondary.main} solid;
  background-size: contain;
`;

const DivEspaco = styled("div")`
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  background-color: transparent;

  margin: 0 auto;
  position: relative;

  gap: 28px;
  > span > h1 {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media (max-width: 768px) {
    padding-top: 3rem;
    padding-left: 0.8rem;
    > span > h1 {
      font-size: 2.2em;
    }
  }
`;

export const SectionTextoQuatro = () => {
  return (
    <DivText4>
      <DivEspaco>
        <ButtonTres href="https://google.com" text={"COMPRE AGORA"} />
        <H1White>
          O QUE VOCÊ <br /> VAi COMPRAR?
        </H1White>
      </DivEspaco>
    </DivText4>
  );
};

// SectionTextoCinco Style

const DivText5 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  padding: 65px 70px;

  border-top: 3.5px #000 solid;
  border-right: 3.5px #000 solid;
  border-bottom: 3.5px #000 solid;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    margin: 0;
    min-height: 768px;

    padding: 65px 20px;

    border: none;
  }
`;

const DivImgDois = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  border-top: 3.5px #000 solid;
  border-bottom: 3.5px #000 solid;

  background-image: url(/images/StickerPack.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    margin: 0;
    min-height: 380px;

    padding: 65px 20px;

    border-top: none;
  }
`;

const Ol = styled("ol")``;

const ListPink = styled("li")`
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 1.5rem 1.2rem;

  font-family: "Quicksand";
  @media (max-width: 768px) {
    margin: 0.9rem 0.7rem;
  }
`;

export const SectionTextoCinco = () => {
  return (
    <Div>
      <DivText5>
        <Ol>
          <ListPink>
            Logotipo - Seu logo na cor original, em preto e em branco.
          </ListPink>
          <ListPink>
            Marca d’água - pra que você coloque sobre sua fotos, é a sua logo e
            submarca sem o fundo (com fundo transparente) na cor original, preta
            e branca.
          </ListPink>
          <ListPink>
            Arquivo vetorizado em pdf e eps - o arquivo que você enviará para
            gráﬁca e para fazer qualquer outro produto personalizado, incluindo letreiros e
            outdoors, em que seu logo estará sempre em alta qualidade
            independente do tamanho em que você for usa-lo.
          </ListPink>
          <ListPink>
            Submarca - A logo em formato circular, para aplicações menores.
          </ListPink>
          <ListPink>
            Variação da logo - Geralmente a logo vai num formato vertical, nessa
            opção você também irá recebê-la no formato horizontal, para que seja
            possível usá-la de outras formas.
          </ListPink>
          <ListPink>
            Símbolo - Você receberá também só o símbolo que criarmos para compor
            sua logo, seja ele um desenho ou iniciais... Também em formato PNG
            (sem fundo/ Fundo transparente).
          </ListPink>
          <ListPink>
            Paleta de cores - código das cores usadas na identidade visual.
          </ListPink>
          <ListPink>
            Tipograﬁa - fontes usadas em sua identidade visual, para que você
            consiga padronizar tudo o que ﬁzer ou publicar.
          </ListPink>
          <ListPink>
            Pattern - estampa com a repetição do simbolo da logo, pode ser usado
            em qualquer item de papelaria, compondo e ﬁxando a marca
          </ListPink>
          <ListPink>
            Mockup - Aplicação da identidade visual em papelaria para melhor
            visualização do cliente.
          </ListPink>
        </Ol>
      </DivText5>
      <DivImgDois />
    </Div>
  );
};

// SectionTextoSeis Style

const DivText6 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding: 11rem 0;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  > span > h1 {
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media (max-width: 768px) {
    > span > h1 {
      font-size: 2.8em;
    }
    padding: 7rem 0 6rem;
  }
`;

export const SectionTextoSeis = () => {
  return (
    <>
      <DivText6>
        <H1White>NOSSOS TERMOS</H1White>
      </DivText6>
    </>
  );
};

// SectionTextoSete Style

const DivText7 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  margin: 0;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivContainDois = styled("div")`
  padding: 4rem 0;
  margin: 0 auto;
  width: 820px;
  max-width: 820px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
`;

const DivContainTexto = styled("div")`
  padding: 1rem 0;
  margin: 0 auto;
  width: 920px;
  max-width: 920px;

  > p {
    text-align: center;
    font-size: 1.5em;
    line-height: 2em !important;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 95%;

    > p {
      font-size: 1.4em;
    }
  }
`;

const DivContainRosa = styled("div")`
  margin: 0 auto;
  width: 820px;
  max-width: 820px;

  > p {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
`;

const Text = styled("p")`
  font-size: 1.2em;
  color: ${({ theme }) => theme.palette.primary.dark};

  @media (max-width: 768px) {
    font-size: 0.9em;
    line-height: 1.25em !important;
  }
`;

const DivRosaUm = styled("div")`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const DivRosaDois = styled("div")`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const SectionTextoSete = () => {
  return (
    <>
      <DivText7>
        <DivRosaUm>
          <DivContainTexto>
            <ParagraphWhite>
              Para entregarmos sempre o melhor para nossos clientes, criamos
              alguns termos para facilitar a nossa comunicação e agilizar nossos
              trabalhos. Assim criando um melhor ambiente para ambos.
            </ParagraphWhite>
          </DivContainTexto>
        </DivRosaUm>
        <DivContainDois>
          <Text>
            Para IDENTIDADE VISUAL:
            <br />
            <br />
            1. Após a aprovação do pagamento, o cliente receberá um BRIEFING -
            Um formulário que deve ser preenchido para entendermos e traduzirmos
            o conceito da sua empresa em um logotipo criativo e exclusivo.
            <br />
            <br />
            2. Após respondidas as perguntas do formulário, começamos a produzir
            seu logo, que será enviada para a primeira aprovação dentro de 15
            dias úteis.
            <br />
            <br />
            3. Cada logotipo criado tem direito a 5 alterações, passando disso,
            é cobrado a parte em cada alteração, um valor de R$40. Por isso é
            muito necessário que o cliente envie todas as informações e
            referências através do formulário, para que tenhamos menos chances
            de produzir algo que não goste.
            <br />
            <br />
            4. Não poderá alterar os mockups apresentados ao cliente.
            <br />
            <br />
            5. Depois de aprovado e enviado, o cliente NÃO terá direito a
            alteração exceto se houver o pagamento de R$80. Isso não se aplica a
            mudanca total da logotipo e do simbolo criado, apenas detalhes como
            cores e fontes.
            <br />
            <br />
            DEVERES DA EMPRESA
            <br />
            <br />
            6. Desenvolver o Projeto contratado.
            <br />
            <br />
            7. Criar o design de acordo com o Brieﬁng preenchido pelo cliente.
            <br />
            <br />
            8. Dar devido atendimento ao cliente pelo e-mail ###########
            <br />
            <br />
            9. Enviar a proposta no prazo de 15 dias ÚTEIS, que foi estabelecido
            no ato do agendamento.
            <br />
            <br />
            10. Atender até 5 (cinco) pedidos de alterações no Projeto
            solicitado pelo cliente. Sem alterar o valor
            <br />
            <br />
            11. Enviar por e-mail e drive todos os arquivos digitais dos itens
            presentes no Projeto contratado.
            <br />
            <br />
            12. Manter em sigilo todas as informações fornecidas pelo cliente no
            processo de criação, até que o projeto se torne público.
            <br />
            <br />
            13. Ter os arquivos salvos do projeto por apenas 90 dias, caso o
            cliente solicite novamente. Passando desse prazo será cobrado um
            valor de 50,00 para o reenvio dos arquivos.
          </Text>
        </DivContainDois>
        <DivRosaDois>
          <DivContainRosa>
            <Text>
              <br />
              <br />
              ISENÇÃO DE RESPONSABILIDADES
              <br />
              <br />
              14. Uso irresponsável ou perda dos arquivos por parte do cliente.
              (após o prazo de 90 dias.)
              <br />
              <br />
              15. Plágio de terceiros sobre a marca do cliente.
              <br />
              <br />
              16. Informação errada ou erro de digitação por parte do cliente,
              depois do material enviado para a confecção ou já impresso.
              <br />
              <br />
              17. Falta de comunicação por parte do cliente, após 30 dias sem
              comunicação o projeto estará automaticamente cancelado, não
              havendo reembolso do valor investido.
              <br />
              <br />
              <br />
            </Text>
          </DivContainRosa>
        </DivRosaDois>
        <DivContainDois>
          <Text>
            DIREITOS DA EMPRESA
            <br />
            <br />
            <br />
            18. Recusar serviços dependendo de seu conteúdo ou circunstâncias.
            <br />
            <br />
            19. Suspender o projeto caso o cliente não envie as informações
            solicitadas dentro de 30 dias úteis após o pagamento inicial, tendo
            o direito de reagendar o cliente para a próxima data disponível na
            agenda de trabalhos.
            <br />
            <br />
            20. Adiar o prazo combinado para entrega do Projeto por até 10 dias
            úteis (por diversas circunstâncias que possam comprometer o
            andamento da agenda, como por exemplo: mudança de endereço,
            problemas de saúde, defeito em equipamento, luto, etc).
            <br />
            <br />
            21. Cobrar taxas extras por alterações que ultrapassem o limite
            combinado.
            <br />
            <br />
            22. Divulgar o Projeto de seus clientes em suas mídias sociais para
            divulgação de seu portfólio.
            <br />
            <br />
            23. Somente enviar todo o serviço/material contratado mediante
            pagamento integral efetuado por parte do cliente.
            <br />
            <br />
            24. Quando o projeto já é iniciado e o cliente quiser cancelar, me
            reservo no direito de ﬁcar com o valor pago para cobrir reserva de
            agenda (que poderia ter agendado outro cliente que está na lista de
            espera), carga-horária de trabalho já iniciado para pesquisas e
            esboços.
            <br />
            <br />
            25. Após 3 meses (90 dias) de não respostas do cliente sem aviso
            prévio, o projeto é dado como abandonado, dessa forma não será
            possível voltar a criação do mesmo após esse período, o cliente
            deverá fazer um novo pagamento integral e agendar novamente uma nova
            criação.
            <br />
            <br />
            26. Ter o prazo de 30 dias para receber o valor ﬁnal do cliente,
            caso contrário o projeto será excluído do nosso sistema e o cliente
            deverá contratar de novo o serviço e agendar uma nova data
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            DIREITOS DO CLIENTE
            <br />
            <br />
            27. Receber todo o serviço e material que contratou.
            <br />
            <br />
            28. Receber o brieﬁng para ser respondido após o pagamento.
            <br />
            <br />
            29. Receber devido atendimento, esclarecimentos e satisfações por
            parte da empresa.
            <br />
            <br />
            30. Ter autonomia e direito de uso de imagem sobre os arquivos,
            mídias e materiais que recebeu por parte da empresa.
            <br />
            <br />
            31. Se arrepender da compra até 7 dias corridos após a contratação e
            ter o reembolso integral do valor pago, em 2 dias úteis.
            <br />
            <br />
            32. Desistir do Projeto após ser iniciado a criação, porém NÃO
            HAVERÁ NENHUM reembolso do valor, pelas cargas horárias do designer,
            reserva de vaga na agenda e trabalho de estudo já iniciado.
          </Text>
        </DivContainDois>
      </DivText7>
    </>
  );
};

// Section oito style

const DivText8 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-top: 3rem;
  min-height: 280px;

  background-color: ${({ theme }) => theme.palette.primary.main};
  > span > h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 230px;
  }
`;

export const SectionTextoOito = () => {
  return (
    <>
      <DivText8>
        <H1White>SE INTERESSOU?</H1White>
        <ButtonDois href="https://google.com" text={"COMPRE AGORA"} />
      </DivText8>
    </>
  );
};

// estilização do texto nove

const DivText9 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 12rem;
  min-height: 320px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 768px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-left: 5.5rem;
  }
`;

const DivRelative = styled("div")`
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  position: relative;

  gap: 28px;

  > span > h1 {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  @media (max-width: 768px) {
    padding-top: 3rem;
    padding-left: 0.5rem;
    > span > h1 {
      font-size: 2.2em;
    }
  }
`;

export const SectionTextoNove = () => {
  return (
    <DivText9>
      <DivRelative>
        <H1White>
          BRANDING É <br /> MAIS QUE UMA LOGO
        </H1White>
        <ButtonTres href="https://google.com" text={"COMPRE AGORA"} />
      </DivRelative>
    </DivText9>
  );
};
