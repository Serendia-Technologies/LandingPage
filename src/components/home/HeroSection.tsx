'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #000024 0%, #1b679e 100%)',
        color: '#ffffff',
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '60%',
          height: '200%',
          background:
            'radial-gradient(ellipse, rgba(65,167,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 720 }}>
          <Typography variant="h1" sx={{ mb: 3, lineHeight: 1.15 }}>
            {t('title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 5,
              opacity: 0.85,
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            {t('subtitle')}
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontSize: '1rem', px: 5, py: 1.5 }}
          >
            {t('cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
