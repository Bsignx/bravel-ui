import { create } from '@storybook/theming';

const colorPrimary = '#111827';
const colorHighlight = '#F43F5E';
const lightGray = '#F9FAFB';

export default create({
  base: 'light',
  brandTitle: 'Bravel UI',
  brandUrl: 'https://bravel.club',
  brandImage:
    'https://res.cloudinary.com/my-portfoiio/image/upload/v1643069675/samples/bravel/Frame_enaaw4.png',
  colorPrimary: colorPrimary,
  colorSecondary: colorHighlight,
  textColor: colorPrimary,
  barTextColor: colorPrimary,
  inputTextColor: colorPrimary,
  textInverseColor: colorPrimary,
  textMutedColor: colorPrimary,
  appBg: lightGray,
});
