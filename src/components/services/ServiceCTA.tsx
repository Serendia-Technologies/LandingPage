'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { ServiceDefinition } from '@/data/services';

interface Props {
  service: ServiceDefinition;
}

export default function ServiceCTA({ service }: Props) {
  const t = useTranslations(`serviceDetail.${service.translationKey}`);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(90deg, #1b679e 0%, #41a7ed 100%)',
        color: '#ffffff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2, color: '#ffffff' }}>
          {t('ctaTitle')}
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}
        >
          {t('ctaSubtitle')}
        </Typography>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: '#ffffff',
            color: '#1b679e',
            fontSize: '1rem',
            px: 5,
            py: 1.5,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)',
            },
          }}
        >
          {t('ctaButton')}
        </Button>
      </Container>
    </Box>
  );
}
