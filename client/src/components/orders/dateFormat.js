import dateFormat from 'dateformat';

<<<<<<< HEAD
export const dateBrazil = (date, options) => {
=======
export const dateFormatBR = (date, options) => {
>>>>>>> 23a4f0232145785ba766da00f11d57d9f24c7d7f
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
