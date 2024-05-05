import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../State/Auth/Action';

const LoginForm = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData))

        console.log("data", userData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                        Đăng nhập
                    </Button>
                </Grid>
            </Grid>
        </form>
        <div className='py-3 flex justify-center items-center'>
            <p>Nếu bạn chưa có tài khoản ?</p>
            <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Đăng Ký</Button>
        </div>
    </div>
  )
}

export default LoginForm