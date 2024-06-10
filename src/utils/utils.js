// Função para formatar números no estilo brasileiro
export const formatNumber = (number) => {
  if (number !== undefined && number !== null) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return '0,00'; // Retorna um valor padrão ou uma string de erro, dependendo da sua preferência
};

// Função para verificar o status do estabelecimento com base nas horas de atendimento
export const checkStatus = (atendimentoInicio, atendimentoFim) => {
  if (!atendimentoInicio || !atendimentoFim) {
    return 'Fechado';
  }

  const agora = new Date();
  const [horaAtual, minutoAtual] = [agora.getHours(), agora.getMinutes()];

  const [inicioHora, inicioMinuto] = atendimentoInicio.split(':').map(Number);
  const [fimHora, fimMinuto] = atendimentoFim.split(':').map(Number);

  const inicioAtendimento = new Date(agora);
  inicioAtendimento.setHours(inicioHora, inicioMinuto, 0, 0);

  const fimAtendimento = new Date(agora);
  fimAtendimento.setHours(fimHora, fimMinuto, 0, 0);

  if (inicioAtendimento <= fimAtendimento) {
    // Horário de atendimento no mesmo dia
    if (agora >= inicioAtendimento && agora <= fimAtendimento) {
      return "Aberto";
    } else {
      return "Fechado";
    }
  } else {
    // Horário de atendimento atravessa a meia-noite
    if (agora >= inicioAtendimento || agora <= fimAtendimento) {
      return "Aberto";
    } else {
      return "Fechado";
    }
  }
};
