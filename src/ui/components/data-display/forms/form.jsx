import React, { Component } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Div = styled("div")`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.primary.light};

  > form {
    background-color: ${({ theme }) => theme.palette.primary.light};
    padding-bottom: 3rem;
    width: 50%;
  }

  > form > button {
    display: block;
    width: 50%;
    margin: 0 auto;
  }

  > form > div > label {
    white-space: normal !important;
    font-family: "Karla";
  }

  > form > div > div {
    font-family: "Karla";
  }

  @media (min-width: 1025px) and (max-width: 1310px) {
    > form {
      width: 65%;
    }
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    > form > div > div {
      margin-top: 2.5rem;
    }

    > form {
      width: 80%;
    }
  }

  @media (min-width: 1px) and (max-width: 480px) {
    > form > div > div {
      margin-top: 4rem;
    }
    > form {
      width: 80%;
    }
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestionUmChange = this.handleQuestionUmChange.bind(this);
    this.handleQuestionDoisChange = this.handleQuestionDoisChange.bind(this);
    this.handleQuestionTresChange = this.handleQuestionTresChange.bind(this);
    this.handleQuestionQuatroChange =
      this.handleQuestionQuatroChange.bind(this);
    this.handleQuestionCincoChange = this.handleQuestionCincoChange.bind(this);
    this.handleQuestionSeisChange = this.handleQuestionSeisChange.bind(this);
    this.handleQuestionSeteChange = this.handleQuestionSeteChange.bind(this);
    this.handleQuestionOitoChange = this.handleQuestionOitoChange.bind(this);
    this.handleQuestionNoveChange = this.handleQuestionNoveChange.bind(this);
    this.handleQuestionDezChange = this.handleQuestionDezChange.bind(this);
    this.handleQuestionOnzeChange = this.handleQuestionOnzeChange.bind(this);
    this.handleQuestionDozeChange = this.handleQuestionDozeChange.bind(this);
    this.handleQuestionTrezeChange = this.handleQuestionTrezeChange.bind(this);
    this.handleQuestionQuatorzeChange =
      this.handleQuestionQuatorzeChange.bind(this);
    this.handleQuestionQuinzeChange =
      this.handleQuestionQuinzeChange.bind(this);
    this.state = {
      um: "",
      dois: "",
      tres: "",
      quatro: "",
      cinco: "",
      seis: "",
      sete: "",
      oito: "",
      nove: "",
      dez: "",
      onze: "",
      doze: "",
      treze: "",
      quatorze: "",
      quinze: "",
    };
  }

  handleSubmit(event) {
    window.location.href =
      "https://api.whatsapp.com/send?phone=5551990186409&text=Aqui%20est??%20a%20resposta%20do%20briefing%20referente%20a%20compra%20de%20uma%20identidade%20visual%20????%0D%0A%0D%0A%0D%0A%0D%0A" +
      "%0D%0A%0D%0A%0D%0AQual o nome do seu neg??cio?%0D%0A%0D%0A" +
      this.state.um +
      "%0D%0A%0D%0A%0D%0AQual%20o%20nicho%20do%20seu%20neg??cio?%0D%0A%0D%0A" +
      this.state.dois +
      "%0D%0A%0D%0A%0D%0APorque%20voc??%20iniciou%20seu%20neg??cio?%0D%0A%0D%0A" +
      this.state.tres +
      "%0D%0A%0D%0A%0D%0AEntre%20em%20detalhes%20sobre%20sua%20vis??o%20sobre%20o%20seu%20branding:%0D%0A%0D%0A" +
      this.state.quatro +
      "%0D%0A%0D%0A%0D%0AQuais%20cores%20s??o%20indispens??veis%20para%20a%20cria????o%20da%20sua%20identidade%20Visual?%0D%0A%0D%0A" +
      this.state.cinco +
      "%0D%0A%0D%0A%0D%0AQuais%20cores%20voc??%20n??o%20quer%20de%20jeito%20nenhum?%0D%0A%0D%0A" +
      this.state.seis +
      "%0D%0A%0D%0A%0D%0AQuais%20s??o%20seus%20maiores%20concorrentes?%0D%0A%0D%0A" +
      this.state.sete +
      "%0D%0A%0D%0A%0D%0AQual%20a%20idade%20do%20seu%20p??blico?%0D%0A%0D%0A" +
      this.state.oito +
      "%0D%0A%0D%0A%0D%0AQue%20mensagem%20voc??%20quer%20passar%20com%20a%20sua%20marca?%0D%0A%0D%0A" +
      this.state.nove +
      "%0D%0A%0D%0A%0D%0AComo%20voc??%20descreveria%20sua%20marca%20em%20tr??s%20palavras?%0D%0A%0D%0A" +
      this.state.dez +
      "%0D%0A%0D%0A%0D%0ASe%20voc??%20tem%20exemplos%20de%20logos%20que%20goste,%20me%20envie%20no%20whatsapp.%0D%0A%0D%0A" +
      this.state.onze +
      "%0D%0A%0D%0A%0D%0AVoc??%20tem%20website,%20se%20sim%20qual?%0D%0A%0D%0A" +
      this.state.doze +
      "%0D%0A%0D%0A%0D%0AVoc??%20tem%20fontes%20que%20gosta,%20se%20sim%20quais?%0D%0A%0D%0A" +
      this.state.treze +
      "%0D%0A%0D%0A%0D%0AVoc??%20tem%20algum%20moodboard?%0D%0A%0D%0A" +
      this.state.quatorze +
      "%0D%0A%0D%0A%0D%0AAlguma%20outra%20informa????o%20que%20eu%20me%20esqueci%20de%20citar%20mas%20voc??%20acha%20importante?%0D%0A%0D%0A" +
      this.state.quinze +
      ".";
    event.preventDefault();
  }

  handleQuestionUmChange(event) {
    this.setState({ um: event.target.value });
  }

  handleQuestionDoisChange(event) {
    this.setState({ dois: event.target.value });
  }
  handleQuestionTresChange(event) {
    this.setState({ tres: event.target.value });
  }
  handleQuestionQuatroChange(event) {
    this.setState({ quatro: event.target.value });
  }
  handleQuestionCincoChange(event) {
    this.setState({ cinco: event.target.value });
  }
  handleQuestionSeisChange(event) {
    this.setState({ seis: event.target.value });
  }
  handleQuestionSeteChange(event) {
    this.setState({ sete: event.target.value });
  }
  handleQuestionOitoChange(event) {
    this.setState({ oito: event.target.value });
  }
  handleQuestionNoveChange(event) {
    this.setState({ nove: event.target.value });
  }
  handleQuestionDezChange(event) {
    this.setState({ dez: event.target.value });
  }
  handleQuestionOnzeChange(event) {
    this.setState({ onze: event.target.value });
  }
  handleQuestionDozeChange(event) {
    this.setState({ doze: event.target.value });
  }
  handleQuestionTrezeChange(event) {
    this.setState({ treze: event.target.value });
  }
  handleQuestionQuatorzeChange(event) {
    this.setState({ quatorze: event.target.value });
  }
  handleQuestionQuinzeChange(event) {
    this.setState({ quinze: event.target.value });
  }

  render() {
    return (
      <Div>
        <Box
          component="form"
          onSubmit={this.handleSubmit}
          sx={{
            "& > :not(style)": {
              m: 1,
              margin: "1.5rem auto",
              width: "100%",
              whiteSpace: "none",
            },

            ":not(style)": {
              m: 1,
              margin: "0 auto",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label={"Qual o nome do seu neg??cio?"}
            variant="standard"
            required
            onChange={this.handleQuestionUmChange}
            value={this.state.currentText}
          />
          <TextField
            label="Qual o nicho do seu neg??cio?"
            variant="standard"
            required
            onChange={this.handleQuestionDoisChange}
            value={this.state.currentText}
          />
          <TextField
            label="Porque voc?? iniciou seu neg??cio?"
            variant="standard"
            required
            onChange={this.handleQuestionTresChange}
            value={this.state.currentText}
          />
          <TextField
            label="Entre em detalhes sobre sua vis??o sobre o seu branding:"
            variant="standard"
            required
            multiline
            maxRows={8}
            onChange={this.handleQuestionQuatroChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais cores s??o indispens??veis na sua identidade Visual?"
            variant="standard"
            required
            onChange={this.handleQuestionCincoChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais cores voc?? n??o quer de jeito nenhum?"
            variant="standard"
            required
            onChange={this.handleQuestionSeisChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais s??o seus maiores concorrentes?"
            variant="standard"
            required
            onChange={this.handleQuestionSeteChange}
            value={this.state.currentText}
          />
          <TextField
            label="Qual a idade do seu p??blico?"
            variant="standard"
            required
            onChange={this.handleQuestionOitoChange}
            value={this.state.currentText}
          />
          <TextField
            label="Que mensagem voc?? quer passar com a sua marca?"
            variant="standard"
            required
            multiline
            maxRows={8}
            onChange={this.handleQuestionNoveChange}
            value={this.state.currentText}
          />
          <TextField
            label="Como voc?? descreveria sua marca em tr??s palavras?"
            variant="standard"
            required
            onChange={this.handleQuestionDezChange}
            value={this.state.currentText}
          />
          <TextField
            label="Se voc?? tem exemplos de logos que goste, me envie no whatsapp. (Responda: Sim / N??o)"
            variant="standard"
            required
            onChange={this.handleQuestionOnzeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Voc?? tem website, se sim qual?"
            variant="standard"
            required
            onChange={this.handleQuestionDozeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Voc?? tem fontes que gosta, se sim quais?"
            variant="standard"
            required
            onChange={this.handleQuestionTrezeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Voc?? tem algum moodboard. Se sim, me envie no whatsapp. (Responda: Sim / N??o)"
            variant="standard"
            required
            onChange={this.handleQuestionQuatorzeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Alguma outra informa????o que eu me esqueci de citar mas voc?? acha importante?"
            variant="standard"
            required
            onChange={this.handleQuestionQuinzeChange}
            value={this.state.currentText}
          />
          <Button type="submit" value="Send" variant="outlined">
            Envia Briefing
          </Button>
        </Box>
      </Div>
    );
  }
}
