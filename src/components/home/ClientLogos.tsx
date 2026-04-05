'use client';

import { Box, Container, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const placeholderLogos = [
  'TechCorp',
  'DataFlow',
  'InnovateLab',
  'CloudVista',
  'NexGen',
  'Synaptica',
];

export default function ClientLogos() {
  const t = useTranslations('clients');

  return (
    <Box
      component="section"
      sx={{ py: { xs: 5, md: 8 }, bgcolor: '#ffffff' }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 4,
            fontWeight: 500,
          }}
        >
          {t('title')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
            flexWrap: 'wrap',
          }}
        >
          {placeholderLogos.map((name) => (
            <Box
              key={name}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid rgba(0,0,36,0.06)',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  opacity: 0.35,
                  letterSpacing: 1,
                  fontSize: '1.1rem',
                }}
              >
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
