import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store => store)

    useEffect(() => {
        if (jwt) {
          dispatch(getUser(jwt));
        }
      }, [jwt, auth.jwt]);
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
dispatch(register(userData))
        console.log("data", userData)


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='firstName'
                        name='firstName'
                        label='Họ và tên đệm'
                        fullWidth
                        autoComplete='given-name'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Tên'
                        fullWidth
                        autoComplete='given-name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        label='Email'
                        fullWidth
                        autoComplete='given-name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id='password'
                        name='password'
                        label='Mật khẩu'
                        fullWidth
                        autoComplete='password'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button className='w-full bg-[#9155FD]'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:" .8rem", bgcolor:"#9155FD"}}>
                        Đăng kí
                    </Button>
                </Grid>
            </Grid>
        </form>

        <div className='py-3 flex justify-center items-center'>
            <p>Nếu bạn đã có tài khoản ?</p>
            <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Đăng nhập</Button>
        </div>
    </div>
  )
}

export default RegisterForm