import React, { Component } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

const Div = styled("div")`
  width: 100%;
  margin: 0 auto;
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
      "https://api.whatsapp.com/send?phone=5551990186409&text=Aqui%20está%20a%20resposta%20do%20briefing%20referente%20a%20compra%20de%20uma%20identidade%20visual%20💜%0D%0A%0D%0A%0D%0A" +
      "Qual o nome do seu negócio?" +
      this.state.um +
      "%0D%0A%0D%0AQual%20o%20nicho%20do%20seu%20negocio?" +
      this.state.dois +
      "%0D%0A%0D%0APorque%20você%20iniciou%20seu%20negócio?" +
      this.state.tres +
      "%0D%0A%0D%0AEntre%20em%20detalhes%20sobre%20sua%20visão%20sobre%20o%20seu%20branding" +
      this.state.quatro +
      "%0D%0A%0D%0AQuais%20cores%20são%20indispensáveis%20para%20a%20criação%20da%20sua%20identidade%20Visual" +
      this.state.cinco +
      "%0D%0A%0D%0AQuais%20cores%20você%20não%20quer%20de%20jeito%20nenhum" +
      this.state.seis +
      "%0D%0A%0D%0AQuais%20são%20seus%20maiores%20concorrentes" +
      this.state.sete +
      "%0D%0A%0D%0AQual%20a%20idade%20do%20seu%20público" +
      this.state.oito +
      "%0D%0A%0D%0AQue%20mensagem%20você%20quer%20passar%20com%20a%20sua%20marca" +
      this.state.nove +
      "%0D%0A%0D%0AComo%20você%20descreveria%20sua%20marca%20em%20três%20palavras" +
      this.state.dez +
      "%0D%0A%0D%0ASe%20você%20tem%20exemplos%20de%20logos%20que%20goste,%20me%20envie%20no%20whatsapp." +
      this.state.onze +
      "%0D%0A%0D%0AVocê%20tem%20website,%20se%20sim%20qual?" +
      this.state.doze +
      "%0D%0A%0D%0AVocê%20tem%20fontes%20que%20gosta,%20se%20sim%20quais?" +
      this.state.treze +
      "%0D%0A%0D%0AVocê%20tem%20algum%20moodboard%20(criado%20por%20você,%20ou%20tirado%20do%20Pinterest)%20que%20você%20queira%20me%20mostrar,%20referente%20a%20sua%20marca?" +
      this.state.quatorze +
      "%0D%0A%0D%0AAlguma%20outra%20informação%20que%20eu%20me%20esqueci%20de%20citar%20mas%20você%20acha%20importante?" +
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
            "& > :not(style)": { m: 1, margin: "1.5rem 0", width: "100%" },
            ":not(style)": { m: 1, width: "80%", margin: "0 auto" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Qual o nome do seu negócio?"
            multiline
            maxRows={6}
            variant="standard"
            onChange={this.handleQuestionUmChange}
            value={this.state.currentText}
          />
          <TextField
            label="Qual o nicho do seu negocio?"
            variant="standard"
            onChange={this.handleQuestionDoisChange}
            value={this.state.currentText}
          />
          <TextField
            label="Porque você iniciou seu negócio?"
            variant="standard"
            onChange={this.handleQuestionTresChange}
            value={this.state.currentText}
          />
          <TextField
            label="Entre em detalhes sobre sua visão sobre o seu branding (Faça desse parágrafo o maior que você pudeeerrr, eu vou ficar muito feliz em ler)"
            variant="standard"
            onChange={this.handleQuestionQuatroChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais cores são indispensáveis para a criação da sua identidade Visual"
            variant="standard"
            onChange={this.handleQuestionCincoChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais cores você não quer de jeito nenhum"
            variant="standard"
            onChange={this.handleQuestionSeisChange}
            value={this.state.currentText}
          />
          <TextField
            label="Quais são seus maiores concorrentes"
            variant="standard"
            onChange={this.handleQuestionSeteChange}
            value={this.state.currentText}
          />
          <TextField
            label="Qual a idade do seu público"
            variant="standard"
            onChange={this.handleQuestionOitoChange}
            value={this.state.currentText}
          />
          <TextField
            label="Que mensagem você quer passar com a sua marca"
            variant="standard"
            onChange={this.handleQuestionNoveChange}
            value={this.state.currentText}
          />
          <TextField
            label="Como você descreveria sua marca em três palavras"
            variant="standard"
            onChange={this.handleQuestionDezChange}
            value={this.state.currentText}
          />
          <TextField
            label="Se você tem exemplos de logos que goste, me envie no whatsapp. (Responda: Sim / Não "
            variant="standard"
            onChange={this.handleQuestionOnzeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Você tem website, se sim qual?"
            variant="standard"
            onChange={this.handleQuestionDozeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Você tem fontes que gosta, se sim quais?"
            variant="standard"
            onChange={this.handleQuestionTrezeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Você tem algum moodboard (criado por você, ou tirado do Pinterest) que você queira me mostrar, referente a sua marca?"
            variant="standard"
            onChange={this.handleQuestionQuatorzeChange}
            value={this.state.currentText}
          />
          <TextField
            label="Alguma outra informação que eu me esqueci de citar mas você acha importante?"
            variant="standard"
            onChange={this.handleQuestionQuinzeChange}
            value={this.state.currentText}
          />
          <Button type="submit" value="Send" variant="outlined">
            Clique aqui
          </Button>
        </Box>
      </Div>
    );
  }
}
