'use client';

import { useState, FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {t('formTitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              {t('formSubtitle')}
            </Typography>

            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '1px solid rgba(0,0,36,0.06)',
              }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label={t('name')}
                    required
                    fullWidth
                    value={formData.name}
                    onChange={handleChange('name')}
                    inputProps={{ minLength: 2 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label={t('email')}
                    type="email"
                    required
                    fullWidth
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label={t('phone')}
                    type="tel"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    helperText={t('phoneOptional')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label={t('company')}
                    required
                    fullWidth
                    value={formData.company}
                    onChange={handleChange('company')}
                    inputProps={{ minLength: 2 }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label={t('message')}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange('message')}
                    inputProps={{ minLength: 10 }}
                  />
                </Grid>
                <Grid size={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendOutlinedIcon />}
                    sx={{ mt: 1 }}
                  >
                    {t('send')}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mt: { xs: 0, md: 12 } }}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('infoTitle')}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <EmailOutlinedIcon sx={{ color: 'primary.main', mt: 0.25 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {t('emailLabel')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      contact@serendia.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <PhoneOutlinedIcon sx={{ color: 'primary.main', mt: 0.25 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {t('phoneLabel')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      +1 (555) 000-0000
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <LocationOnOutlinedIcon sx={{ color: 'primary.main', mt: 0.25 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {t('locationLabel')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {t('locationValue')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSubmitted(false)}
          severity="success"
          variant="filled"
        >
          {t('successMessage')}
        </Alert>
      </Snackbar>
    </Box>
  );
}
