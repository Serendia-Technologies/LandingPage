'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { ServiceDefinition } from '@/data/services';

interface Props {
  service: ServiceDefinition;
}

export default function ServiceHero({ service }: Props) {
  const t = useTranslations(`serviceDetail.${service.translationKey}`);
  const Icon = service.icon;

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #000024 0%, #1b679e 100%)',
        color: '#ffffff',
        py: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '50%',
          height: '150%',
          background:
            'radial-gradient(ellipse, rgba(65,167,237,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              bgcolor: 'rgba(65,167,237,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 32, color: '#41a7ed' }} />
          </Box>
        </Box>
        <Typography variant="h1" sx={{ mb: 3, maxWidth: 700, lineHeight: 1.15 }}>
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
      </Container>
    </Box>
  );
}
