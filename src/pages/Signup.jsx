import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Col, Button, Form, FormControl, InputGroup, FormLabel, Spinner,
} from 'react-bootstrap';
import { colors } from '../values/colors';

import StatusAlert from '../components/StatusAlert';
import { emailPattern, namePattern } from '../common/constants';
import axios from '../config/server.config';

import './signup.css';

function Signup() {
  const title = 'Signup';

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const alertOpts = useRef({ isShow: false, message: '' });

  const handleDismiss = () => {
    alertOpts.current.isShow = false;
  };

  const handleSignup = async (data) => {
    try {
      setIsLoading(true);
      axios.post('user/register', data).then((response) => {
        if (response.data.state === 'success') {
          setIsLoading(false);
          navigate('/login');
        } else {
          window.alert('already user');
          setIsLoading(false);
        }
      });
      // const user = await addUser(data);
      // eslint-disable-next-line no-console
      // console.log(`signup successful, user: ${user}`);
      // setIsLoading(false);
      // navigate('/login');
    } catch (err) {
      // Need to useRef to avoid cyclic reference of the show state in StatusAlert but we now must set alertOps
      // before a set state call so that StatusAlert can render.
      // TODO: Figure a more elegant solution for auto-dismissal alert.
      alertOpts.current = { isShow: true, message: err.message };
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-signup">
        <Form className="row g-2" noValidate>
          <i className="bi bi-file-lock-fill auth-icon mt-3 text-center" style={{ color: colors.primary }} />
          <Form.Group as={Col} lg="6" controlId="inputFirstName">
            <FormLabel className="text-white">First Name</FormLabel>
            <FormControl type="text"
              isInvalid={errors.firstname}
              placeholder="First Name"
              className="text-white"
              style={{ background: '#09181D' }}
              {...register('firstname', { required: true })}
            />
            <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} lg="6" controlId="inputLastName">
            <FormLabel className="text-white">Last Name</FormLabel>
            <FormControl type="text"
              isInvalid={errors.lastname}
              placeholder="Last Name"
              className="text-white"
              style={{ background: '#09181D' }}
              {
              ...register('lastname', {
                required: true,
                pattern: namePattern,
              })
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastname?.type === 'required' && 'Last name is required'}
              {errors.lastname?.type === 'pattern' && 'No special characters allowed except hyphen'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputEmail">
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
          <Form.Group as={Col} md="12" controlId="inputUsername">
            <Form.Label className="text-white">Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control type="text"
                isInvalid={errors.username}
                className="text-white"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                style={{ background: '#09181D' }}
                {...register('username', { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username && 'Username is required'}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputPassword">
            <FormLabel className="text-white">Password</FormLabel>
            <FormControl type="password"
              isInvalid={errors.password}
              className="text-white"
              placeholder="Password"
              style={{ background: '#09181D' }}
              {
              ...register('password', {
                required: true,
                minLength: 5,
              })
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.type === 'required' && 'Password is required'}
              {errors.password?.type === 'pattern' && 'Password must be at least 5 characters long'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              isInvalid={errors.agree}
              {...register('agree', { required: true })}
              className="text-white"
            />
          </Form.Group>
          <Button className="w-100 btn btn-lg btn-primary"
            type="button"
            disabled={isLoading}
            onClick={handleSubmit(handleSignup)}
            style={{ background: colors.primary }}
          >
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
            <span className="px-2 text-black">Sign up</span>
          </Button>
        </Form>
      </main>
      <StatusAlert show={alertOpts.current.isShow}
        variant="failure"
        message={alertOpts.current.message}
        onDismiss={handleDismiss}
      />
    </>
  );
}

export default Signup;
