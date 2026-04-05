'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import { useTranslations } from 'next-intl';

const benefits = [
  { key: 'results', icon: TrendingUpOutlinedIcon },
  { key: 'tailored', icon: TuneOutlinedIcon },
  { key: 'endToEnd', icon: IntegrationInstructionsOutlinedIcon },
  { key: 'edge', icon: DevicesOtherOutlinedIcon },
];

export default function WhySerendia() {
  const t = useTranslations('whySerendia');

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {t('title')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {t('subtitle')}
        </Typography>

        <Grid container spacing={3}>
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <Grid key={b.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: '#ffffff',
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,36,0.06)',
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'rgba(65,167,237,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {t(`items.${b.key}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t(`items.${b.key}.description`)}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
