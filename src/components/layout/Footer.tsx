'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000024',
        color: '#ffffff',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Serendia
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 300 }}>
              {t('tagline')}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
              {t('quickLinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                {t('home')}
              </Link>
              <Link href="/services/ai-adoption" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                {t('services')}
              </Link>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                {t('about')}
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                {t('contact')}
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
              {t('followUs')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#41a7ed' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://x.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#41a7ed' } }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                href="mailto:contact@serendia.com"
                sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#41a7ed' } }}
              >
                <EmailOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />

        <Typography variant="body2" sx={{ opacity: 0.5, textAlign: 'center' }}>
          &copy; {currentYear} Serendia. {t('rights')}
        </Typography>
      </Container>
    </Box>
  );
}
