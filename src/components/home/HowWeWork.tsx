'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { useTranslations } from 'next-intl';

const steps = [
  { key: 'discovery', icon: SearchOutlinedIcon, number: '01' },
  { key: 'strategy', icon: MapOutlinedIcon, number: '02' },
  { key: 'implementation', icon: RocketLaunchOutlinedIcon, number: '03' },
  { key: 'optimization', icon: AutoGraphOutlinedIcon, number: '04' },
];

export default function HowWeWork() {
  const t = useTranslations('howWeWork');

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}
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
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Grid key={step.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,36,0.06)',
                    position: 'relative',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '3rem',
                      fontWeight: 800,
                      color: 'rgba(65,167,237,0.12)',
                      position: 'absolute',
                      top: 16,
                      right: 20,
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Icon
                    sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                  />
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {t(`steps.${step.key}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t(`steps.${step.key}.description`)}
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
