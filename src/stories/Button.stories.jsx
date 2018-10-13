import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import wInfo from '../utils/utils';
import Button from '../components/Button';

storiesOf('Button', module)
  .addWithJSX(
    'with text',
    wInfo(`
      description of button component
      ~~~js
        <Button>Click Here</Button>
      ~~~
  `)(() => <Button bg={text('bg', 'green')}>Hello Button</Button>),
  )
  .addWithJSX('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">

        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .addWithJSX('with my name', () => <Button bg={text('bg', 'green')}>Yoni</Button>);
