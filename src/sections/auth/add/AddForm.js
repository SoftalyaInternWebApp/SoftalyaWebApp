import * as Yup from 'yup';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Dialog, AlertTitle } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function AddForm() {
    // const navigate = useNavigate();//yönlendirme

    const [showPassword, setShowPassword] = useState(false);

    const AddSchema = Yup.object().shape({
        firstName: Yup.string().required('Bu alan zorunludur.'),
        lastName: Yup.string().required('Bu alan zorunludur.'),
        email: Yup.string().email('Geçerli bir Email adresi giriniz.').required('Bu alan zorunludur.'),
        password: Yup.string().required('Bu alan zorunludur.'),
    });

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };

    const methods = useForm({
        resolver: yupResolver(AddSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async () => {
        // navigate('/dashboard', { replace: true }); //anasayfaya yönlendirme
        <Alert severity="success">This is a success alert — check it out!</Alert>


    };
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <RHFTextField name="firstName" label="Ad" />
                    <RHFTextField name="lastName" label="Soyad" />
                </Stack>

                <RHFTextField name="email" label="Email adresi" />

                <RHFTextField
                    name="password"
                    label="Şifre"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <LoadingButton onClick={handleClick} fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                    Ekle
                </LoadingButton>
                <Dialog open={open} onClose={handleClick}>
                    <Alert severity="success">
                        <AlertTitle>Başarılı</AlertTitle>
                        Sürücü Başarıyla Kaydedildi.
                        {/* <Button icon={'akar-icons:arrow-back'}> </Button > */}
                    </Alert>
                </Dialog>
            </Stack>
        </FormProvider>
    );
}
