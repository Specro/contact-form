import { useState } from 'react';
import { validateEmail, validateEmpty } from './utils';
import { produce } from 'immer';
import Input from './Input';
import RadioInput from './RadioInput';
import RadioWrapper from './RadioWrapper';
import TextArea from './TextArea';
import Button from './Button';
import Checkbox from './Checkbox';
import Notification from './Notification';

const validations = {
  firstName: {
    validate: value => validateEmpty(value, 'This field is required')
  },
  lastName: {
    validate: value => validateEmpty(value, 'This field is required')
  },
  email: {
    validate: value => validateEmail(value, 'Please enter a valid email address')
  },
  queryType: {
    validate: value => validateEmpty(value, 'Please select a query type')
  },
  message: {
    validate: value => validateEmpty(value, 'This field is required')
  },
  consent: {
    validate: value => value?'':'To submit this form, please consent to being contacted'
  }
};
const defaultState = {
  firstName: {
    value: '',
    error: ''
  },
  lastName: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  },
  queryType: {
    value: '',
    error: ''
  },
  message: {
    value: '',
    error: ''
  },
  consent: {
    value: false,
    error: ''
  }
};

const notificationTimeout = 3000;

function App() {
  const [state, setState] = useState(defaultState);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setState(defaultState);
  };

  const handleSubmit = () => {
    let submit = true;
    for (const input in state) {
      const error = validations[input].validate(state[input].value);
      setState(produce(draft => {
        draft[input].error = error;
      }));
      submit = submit?error==='':false
    }
    if (submit) {
      reset();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, notificationTimeout);
    }
  };

  const handleSetValue = (input, value) => {
    setState(produce(draft => {
      draft[input].value = value;
    })); 
  };

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center shadow-sm w-full max-w-card mx-4 my-6 md:py-10 md:px-9">
      {submitted?
        <Notification title="Message Sent!" timeout={notificationTimeout}>
          Thanks for completing the form. We'll be in touch soon!
        </Notification>
      :''}
      <h1 className="text-gray-900 text-3xl font-bold w-full mb-9">Contact Us</h1>
      <fieldset className="flex flex-col gap-7 w-full">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input label="First Name" id="firstName" onChange={e => handleSetValue('firstName', e.target.value)} {...state.firstName} />
          <Input label="Last Name" id="lastName" onChange={e => handleSetValue('lastName', e.target.value)} {...state.lastName} />
        </div>
        <Input label="Email Address" id="email" onChange={e => handleSetValue('email', e.target.value)} {...state.email} />
        <RadioWrapper label="Query Type" error={state.queryType.error}>
          <RadioInput label="General Enquiry" name="query" value="general" onChange={e => handleSetValue('queryType', e.target.value)} checked={state.queryType.value==='general'} />
          <RadioInput label="Support Request" name="query" value="support" onChange={e => handleSetValue('queryType', e.target.value)} checked={state.queryType.value==='support'} />
        </RadioWrapper>
        <TextArea label="Message" id="message" onChange={e => handleSetValue('message', e.target.value)} {...state.message} />
        <Checkbox label="I consent to being contacted by the team" name="consent" onChange={e => handleSetValue('consent', e.target.checked)} checked={state.consent.value} error={state.consent.error} />
        <Button title="Submit" onClick={handleSubmit} />
      </fieldset>
    </div>
  )
}

export default App
