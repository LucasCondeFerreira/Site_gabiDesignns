import React from "react";
import { styled } from "@mui/material/styles";
import {
  H1White,
  H2White,
  H2Black,
  H4Black,
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
    padding: 0 2.2rem;

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

    padding: 65px 3rem;

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
  padding: 3rem 3rem 1.5rem;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.secondary.main};
  > span > h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: 240px;

    > span > h1 {
      text-align: center;
      font-size: 1.7em;
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
            Todo neg??cio precisa de uma marca. E n??o se trata apenas de ter uma
            boa apar??ncia. Queremos contar a sua hist??ria; o que voc?? faz, o que
            voc?? ama, o que voc?? acredita e o que voc?? alcan??ar??. Ent??o, vamos
            destacar sua marca e mostrar exatamente quem voc?? ??.
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
          BRANDiNG ?? <br /> MAiS QUE UMA LOGO
        </H2Black>
        <ParagraphBlack>
          Trata-se de tornar o seu neg??cio memor??vel e coerente. Uma grande
          marca tem a capacidade de fazer com que seus clientes confiem no que
          voc?? tem a oferecer - ent??o d?? o salto e vamos renomear sua empresa.
          Minha promessa para voc?? ?? tornar esse processo de branding livre de
          estresse e uma experi??ncia agrad??vel do in??cio ao fim.
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
          VOC?? EST?? PRONTO <br /> PARA TER A MELHOR LOGO?
        </H1White>
        <ButtonDois
          href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelos%20pacotes%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
          text={"COMPRE AGORA"}
        />
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
  padding: 12rem 0 6rem 14rem;

  > span > h1 {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  background-color: ${({ theme }) => theme.palette.primary.light};
  border-bottom: 8rem ${({ theme }) => theme.palette.secondary.main} solid;
  background-size: contain;

  @media (min-width: 769px) and (max-width: 1160px) {
    > span > h1 {
      font-size: 4.4em;
    }
  }

  @media (max-width: 768px) {
    padding-top: 12rem;
    padding-bottom: 10rem;
    > span > h1 {
      font-size: 2.5em;
    }
  }

  @media (min-width: 701px) and (max-width: 768px) {
    padding-left: 17%;
  }

  @media (min-width: 631px) and (max-width: 700px) {
    padding-left: 19%;
  }

  @media (min-width: 561px) and (max-width: 630px) {
    padding-left: 21%;
  }

  @media (min-width: 496px) and (max-width: 560px) {
    padding-left: 24%;
  }

  @media (min-width: 421px) and (max-width: 495px) {
    padding-left: 28%;
  }

  @media (min-width: 371px) and (max-width: 420px) {
    padding-top: 13rem;
    padding-left: 33%;
    > span > h1 {
      font-size: 1.8em;
    }
  }
  @media (max-width: 370px) {
    padding-top: 13rem;
    padding-left: 20%;
    > span > h1 {
      font-size: 1.8em;
    }
  }
`;

export const SectionTextoQuatro = () => {
  return (
    <DivText4>
      <ButtonTres
        href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelos%20pacotes%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
        text={"COMPRE AGORA"}
      />
      <H1White>
        O QUE VOC?? <br /> VAi COMPRAR?
      </H1White>
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

  padding: 65px 3rem;

  border-top: 3.5px #000 solid;
  border-right: 3.5px #000 solid;

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

    padding: 65px 3rem;

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
    border-bottom: 3.5px #000 solid;
  }
`;

const Ol = styled("ol")`
  padding-left: 0.8rem;
`;

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
            Marca d?????gua - pra que voc?? coloque sobre sua fotos, ?? a sua logo e
            submarca sem o fundo (com fundo transparente) na cor original, preta
            e branca.
          </ListPink>
          <ListPink>
            Arquivo vetorizado em pdf e eps - o arquivo que voc?? enviar?? para
            gr?????ca e para fazer qualquer outro produto personalizado, incluindo
            letreiros e outdoors, em que seu logo estar?? sempre em alta
            qualidade independente do tamanho em que voc?? for usa-lo.
          </ListPink>
          <ListPink>
            Submarca - A logo em formato circular, para aplica????es menores.
          </ListPink>
          <ListPink>
            Varia????o da logo - Geralmente a logo vai num formato vertical, nessa
            op????o voc?? tamb??m ir?? receb??-la no formato horizontal, para que seja
            poss??vel us??-la de outras formas.
          </ListPink>
          <ListPink>
            S??mbolo - Voc?? receber?? tamb??m s?? o s??mbolo que criarmos para compor
            sua logo, seja ele um desenho ou iniciais... Tamb??m em formato PNG
            (sem fundo/ Fundo transparente).
          </ListPink>
          <ListPink>
            Paleta de cores - c??digo das cores usadas na identidade visual.
          </ListPink>
          <ListPink>
            Tipogra???a - fontes usadas em sua identidade visual, para que voc??
            consiga padronizar tudo o que ???zer ou publicar.
          </ListPink>
          <ListPink>
            Pattern - estampa com a repeti????o do simbolo da logo, pode ser usado
            em qualquer item de papelaria, compondo e ???xando a marca
          </ListPink>
          <ListPink>
            Mockup - Aplica????o da identidade visual em papelaria para melhor
            visualiza????o do cliente.
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
  padding: 11rem 3rem;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  > span > h1 {
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media (max-width: 1160px) {
    > span > h1 {
      font-size: 2.8em;
    }
  }

  @media (max-width: 768px) {
    padding: 9rem 3rem;
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
    width: 100%;
    max-width: 100%;
    padding: 0 3rem;
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
    margin-top: 0;
    padding: 0.8rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0 3rem;
    > p {
      line-height: 1.25em !important;
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
    width: 100%;
    max-width: 100%;
    padding: 0 3rem;
  }
`;

const Text = styled("p")`
  font-size: 1.2em;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: 0;
  padding-bottom: 1rem;

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
              alguns termos para facilitar a nossa comunica????o e agilizar nossos
              trabalhos. Assim criando um melhor ambiente para ambos.
            </ParagraphWhite>
          </DivContainTexto>
        </DivRosaUm>
        <DivContainDois>
          <Text>
            Para IDENTIDADE VISUAL:
            <br />
            <br />
            1. Ap??s a aprova????o do pagamento, o cliente receber?? um BRIEFING -
            Um formul??rio que deve ser preenchido para entendermos e traduzirmos
            o conceito da sua empresa em um logotipo criativo e exclusivo.
            <br />
            <br />
            2. Ap??s respondidas as perguntas do formul??rio, come??amos a produzir
            seu logo, que ser?? enviada para a primeira aprova????o dentro de 15
            dias ??teis.
            <br />
            <br />
            3. Cada logotipo criado tem direito a 5 altera????es, passando disso,
            ?? cobrado a parte em cada altera????o, um valor de R$40. Por isso ??
            muito necess??rio que o cliente envie todas as informa????es e
            refer??ncias atrav??s do formul??rio, para que tenhamos menos chances
            de produzir algo que n??o goste.
            <br />
            <br />
            4. N??o poder?? alterar os mockups apresentados ao cliente.
            <br />
            <br />
            5. Depois de aprovado e enviado, o cliente N??O ter?? direito a
            altera????o exceto se houver o pagamento de R$80. Isso n??o se aplica a
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
            7. Criar o design de acordo com o Brie???ng preenchido pelo cliente.
            <br />
            <br />
            8. Dar devido atendimento ao cliente pelo e-mail
            gabrieladdesigner@gmail.com
            <br />
            <br />
            9. Enviar a proposta no prazo de 15 dias ??TEIS, que foi estabelecido
            no ato do agendamento.
            <br />
            <br />
            10. Atender at?? 5 (cinco) pedidos de altera????es no Projeto
            solicitado pelo cliente. Sem alterar o valor
            <br />
            <br />
            11. Enviar por e-mail e drive todos os arquivos digitais dos itens
            presentes no Projeto contratado.
            <br />
            <br />
            12. Manter em sigilo todas as informa????es fornecidas pelo cliente no
            processo de cria????o, at?? que o projeto se torne p??blico.
            <br />
            <br />
            13. Ter os arquivos salvos do projeto por apenas 90 dias, caso o
            cliente solicite novamente. Passando desse prazo ser?? cobrado um
            valor de 50,00 para o reenvio dos arquivos.
          </Text>
        </DivContainDois>
        <DivRosaDois>
          <DivContainRosa>
            <Text>
              <br />
              <br />
              ISEN????O DE RESPONSABILIDADES
              <br />
              <br />
              14. Uso irrespons??vel ou perda dos arquivos por parte do cliente.
              (ap??s o prazo de 90 dias.)
              <br />
              <br />
              15. Pl??gio de terceiros sobre a marca do cliente.
              <br />
              <br />
              16. Informa????o errada ou erro de digita????o por parte do cliente,
              depois do material enviado para a confec????o ou j?? impresso.
              <br />
              <br />
              17. Falta de comunica????o por parte do cliente, ap??s 30 dias sem
              comunica????o o projeto estar?? automaticamente cancelado, n??o
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
            18. Recusar servi??os dependendo de seu conte??do ou circunst??ncias.
            <br />
            <br />
            19. Suspender o projeto caso o cliente n??o envie as informa????es
            solicitadas dentro de 30 dias ??teis ap??s o pagamento inicial, tendo
            o direito de reagendar o cliente para a pr??xima data dispon??vel na
            agenda de trabalhos.
            <br />
            <br />
            20. Adiar o prazo combinado para entrega do Projeto por at?? 10 dias
            ??teis (por diversas circunst??ncias que possam comprometer o
            andamento da agenda, como por exemplo: mudan??a de endere??o,
            problemas de sa??de, defeito em equipamento, luto, etc).
            <br />
            <br />
            21. Cobrar taxas extras por altera????es que ultrapassem o limite
            combinado.
            <br />
            <br />
            22. Divulgar o Projeto de seus clientes em suas m??dias sociais para
            divulga????o de seu portf??lio.
            <br />
            <br />
            23. Somente enviar todo o servi??o/material contratado mediante
            pagamento integral efetuado por parte do cliente.
            <br />
            <br />
            24. Quando o projeto j?? ?? iniciado e o cliente quiser cancelar, me
            reservo no direito de ???car com o valor pago para cobrir reserva de
            agenda (que poderia ter agendado outro cliente que est?? na lista de
            espera), carga-hor??ria de trabalho j?? iniciado para pesquisas e
            esbo??os.
            <br />
            <br />
            25. Ap??s 3 meses (90 dias) de n??o respostas do cliente sem aviso
            pr??vio, o projeto ?? dado como abandonado, dessa forma n??o ser??
            poss??vel voltar a cria????o do mesmo ap??s esse per??odo, o cliente
            dever?? fazer um novo pagamento integral e agendar novamente uma nova
            cria????o.
            <br />
            <br />
            26. Ter o prazo de 30 dias para receber o valor ???nal do cliente,
            caso contr??rio o projeto ser?? exclu??do do nosso sistema e o cliente
            dever?? contratar de novo o servi??o e agendar uma nova data
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
            27. Receber todo o servi??o e material que contratou.
            <br />
            <br />
            28. Receber o brie???ng para ser respondido ap??s o pagamento.
            <br />
            <br />
            29. Receber devido atendimento, esclarecimentos e satisfa????es por
            parte da empresa.
            <br />
            <br />
            30. Ter autonomia e direito de uso de imagem sobre os arquivos,
            m??dias e materiais que recebeu por parte da empresa.
            <br />
            <br />
            31. Se arrepender da compra at?? 7 dias corridos ap??s a contrata????o e
            ter o reembolso integral do valor pago, em 2 dias ??teis.
            <br />
            <br />
            32. Desistir do Projeto ap??s ser iniciado a cria????o, por??m N??O
            HAVER?? NENHUM reembolso do valor, pelas cargas hor??rias do designer,
            reserva de vaga na agenda e trabalho de estudo j?? iniciado.
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
        <ButtonDois
          href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelos%20pacotes%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
          text={"COMPRE AGORA"}
        />
      </DivText8>
    </>
  );
};

// estiliza????o do texto nove

const DivText9 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 14rem;
  min-height: 320px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  > span > h1 {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  @media (min-width: 769px) and (max-width: 1160px) {
    > span > h1 {
      font-size: 4.4em;
    }
  }

  @media (max-width: 768px) {
    padding-top: 13rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 701px) and (max-width: 768px) {
    padding-left: 17%;
  }

  @media (min-width: 631px) and (max-width: 700px) {
    padding-left: 19%;
  }

  @media (min-width: 561px) and (max-width: 630px) {
    padding-left: 21%;
  }

  @media (min-width: 496px) and (max-width: 560px) {
    padding-left: 24%;
  }

  @media (min-width: 421px) and (max-width: 495px) {
    padding-top: 12rem;
    padding-left: 28%;
  }

  @media (min-width: 371px) and (max-width: 420px) {
    padding-top: 12rem;
    padding-left: 33%;
    > span > h1 {
      font-size: 1.8em;
    }
  }
  @media (max-width: 370px) {
    padding-left: 20%;
    > span > h1 {
      font-size: 1.8em;
    }
  }
`;

export const SectionTextoNove = () => {
  return (
    <DivText9>
      <H1White>
        BRANDING ?? <br /> MAIS QUE UMA LOGO
      </H1White>
      <ButtonTres
        href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1%20Me%20interessei%20pelos%20pacotes%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
        text={"COMPRE AGORA"}
      />
    </DivText9>
  );
};

// SectionTextoDez Style

const DivText10 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-top: 14rem;
  padding-bottom: 6rem;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  > span > h1 {
    font-size: 9em;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.primary.main};
    font-family: "Albra";
  }

  > span > h4 {
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 1160px) {
    > span > h1 {
      font-family: "Albra";
      font-size: 7em;
    }
  }

  @media (max-width: 480px) {
    > span > h1 {
      font-family: "Albra";
      font-size: 5em;
    }
    > span > h4 {
      font-size: 0.9em;
    }
  }

  @media (max-width: 768px) {
    padding: 9rem 0rem;
  }
`;

const FundoImage = styled("div")`
  width: 100%;
  margin-top: 3rem;
  padding: 60px 0;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  background-image: url(/images/image-briefing.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  > div {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const ContainTexto = styled("div")`
  padding: 1rem 0;
  margin: 0 auto;
  width: 920px;
  max-width: 920px;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  > p {
    font-family: "Karla";
    font-size: 1.5em;
    line-height: 2em !important;
    text-align: center;
    margin-top: 0;
    padding: 0.8rem 0;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    padding: 0 3rem;
    > p {
      line-height: 1.25em !important;
      font-size: 1.4em;
    }
  }

  @media (max-width: 480px) {
    padding: 0 2.2rem;
    width: 100%;
    max-width: 100%;
    > p {
      line-height: 1.15em !important;
      font-size: 1.1em;
    }
  }
`;

export const SectionTextoDez = () => {
  return (
    <>
      <DivText10>
        <H4Black>RESPONDA AQUi O NOSSO</H4Black>
        <H1White>Briefing</H1White>
        <FundoImage>
          <div>
            <ContainTexto>
              <ParagraphWhite>
                Antes de preencher este formul??rio de consulta, ?? vital que voc??
                tenha uma vis??o para sua marca e tenha uma vibe definida que
                deseja. Por favor, responda a todas as perguntas com o m??ximo de
                detalhes poss??vel, pois ?? extremamente importante que eu possa
                ter uma ideia de voc?? como pessoa e sua marca. Quanto mais
                detalhes melhor, pois isso me mostra que voc?? sabe o que quer, e
                todos n??s adoramos detalhes.
              </ParagraphWhite>
            </ContainTexto>
          </div>
        </FundoImage>
      </DivText10>
    </>
  );
};
