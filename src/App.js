import RegisterForm from './Components/RegisterForm/RegisterForm';
import React from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import French from './lang/fr.json';

const locale = navigator.language;
let defaultMessages;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  default:
    defaultMessages = Spanish;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <RegisterForm></RegisterForm>
      </div>

      <h2>Selector de idioma</h2>
      <button onClick={() => setMessages(Spanish)}>Spanish</button>
      <button onClick={() => setMessages(English)}>English</button>
      <button onClick={() => setMessages(French)}>French</button>

      {/* <select {...messages('gender')}>
        <option value='Spanish'>Spanish</option>
        <option value='English'>English</option>
        <option value='French'>French</option>
      </select> */}
    </IntlProvider>
  );
}

export default App;
