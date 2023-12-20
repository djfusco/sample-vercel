import { html } from 'lit';
import '../src/sample-vercel.js';

export default {
  title: 'SampleVercel',
  component: 'sample-vercel',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <sample-vercel
      style="--sample-vercel-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </sample-vercel>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
