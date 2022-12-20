import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import {
  Button, Form, FormControl, FormLabel, Spinner,
} from 'react-bootstrap';
import { colors } from '../values/colors';
import useAuth from '../hooks/useAuth';

import StatusAlert from '../components/StatusAlert';
import { emailPattern } from '../common/constants';

import './auth.css';

function ForgotPassword() {
  const title = 'Forgot Password';

  const [isLoading, setIsLoading] = useState(false);
  const { sendPasswordReset } = useAuth();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const alertOpts = useRef({ isShow: false, variant: 'success', message: '' });

  const handleDismiss = () => {
    alertOpts.current.isShow = false;
  };

  const handleSend = async () => {
    try {
      setIsLoading(true);
      await sendPasswordReset();

      // Need to useRef to avoid cyclic reference of the show state in StatusAlert but we now must set alertOps
      // before a set state call so that StatusAlert can render.
      // TODO: Figure a more elegant solution for auto-dismissal alert.
      alertOpts.current = { isShow: true, variant: 'success', message: 'email sent' };
      setIsLoading(false);
    } catch (err) {
      alertOpts.current = { isShow: true, variant: 'failure', message: err.message };
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container">
        <Form className="row g-2" noValidate>
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="text-center">
              <i className="bi bi-file-lock-fill auth-icon fw-normal mt-5 text-center" style={{ color: colors.primary }} />
            </div>
            <Form.Group controlId="inputEmail">
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl type="email"
                           isInvalid={errors.email}
                           placeholder="Email@domain.com"
                           className="text-white"
                           style={{ background: '#09181D' }}
                           {
                             ...register('email', {
                               required: true,
                               pattern: emailPattern,
                             })
                           }
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.type === 'required' && 'Email is required'}
                {errors.email?.type === 'pattern' && 'Invalid email'}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="w-100 btn btn-lg btn-primary mt-3"
                    type="button"
                    disabled={isLoading}
                    onClick={handleSubmit(handleSend)}
                    style={{ background: colors.primary }}
            >
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
              <span className="px-2 text-black">Reset Password</span>
            </Button>
          </div>
          <div className="col-md-3" />
        </Form>
      </main>
      <StatusAlert show={alertOpts.current.isShow}
                   variant={alertOpts.current.variant}
                   message={alertOpts.current.message}
                   onDismiss={handleDismiss}
      />
    </>
  );
}

export default ForgotPassword;
