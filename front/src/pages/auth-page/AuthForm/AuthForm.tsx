import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';

import './AuthForm.css';
import { loginValidation, passwordValidation } from './validation';

interface ISignForm {
  login: string;
  password: string;
}

const AuthForm = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({ control });
  const onSubmit: SubmitHandler<ISignForm> = (data) => console.log(data);

  return (
    <div className="auth-form">
      <Typography variant="h4" component="h2" className="">
        Войдите
      </Typography>
      <Typography variant="subtitle1" component="h2" className="auth-form__subtitle">
        Чтобы получить доступ зайдите
      </Typography>
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Логин"
              size="medium"
              margin="normal"
              fullWidth={true}
              className="auth-form__input"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              placeholder="Пароль"
              type="password"
              size="medium"
              margin="normal"
              fullWidth={true}
              className="auth-form__input"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button variant="contained" size="large" type="submit" fullWidth={true} sx={{ marginBottom: 2 }}>
          Войти
        </Button>
        <Divider variant="middle" />

        <Typography variant="subtitle1" component="h2" className="auth-form__social">
          Войдите через социальные сети
        </Typography>
        <ul className="auth-form__icons">
          <li>
            <a href="http://www.facebook.com">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" />
            </a>
          </li>
          <li>
            <a href="http://www.github.com">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            </a>
          </li>
          <li>
            <a href="http://www.google.com">
              <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AuthForm;
