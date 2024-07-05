// src/theme.js
import { extendTheme } from '@chakra-ui/react';
import { statAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(statAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    fontWeight: 'light',
    color: 'red',
  },
  helpText: {},
  container: {},
  icon: {},
  number: {},
});

const statTheme = defineMultiStyleConfig({ baseStyle });

const customTheme = extendTheme({
  components: {
    Stat: statTheme,
  },
});

export default customTheme;
