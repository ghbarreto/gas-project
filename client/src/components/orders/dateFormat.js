import dateFormat from 'dateformat';

export const a = (date, options) => {
  dateFormat.i18n = {
    dayNames: [
      'Dom',
      'Seg',
      'Ter',
      'Qua',
      'Qui',
      'Sex',
      'Sab',
      'Domingo',
      'Segunda',
      'Terca',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado',
    ],
    monthNames: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Maio',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
      'Janeiro',
      'Fevereiro',
      'Marco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
  };

  return dateFormat(date, 'dddd, d mmmm, yyyy "as" HH:MM:ss');
};
