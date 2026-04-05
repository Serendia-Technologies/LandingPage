'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useTranslations } from 'next-intl';
import type { ServiceDefinition } from '@/data/services';

interface Props {
  service: ServiceDefinition;
}

const stepNumbers = ['01', '02', '03', '04'];

export default function ServiceProcess({ service }: Props) {
  const t = useTranslations(`serviceDetail.${service.translationKey}`);
  const steps = ['step1', 'step2', 'step3', 'step4'];

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {t('processTitle')}
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
          {t('processSubtitle')}
        </Typography>

        <Grid container spacing={3}>
          {steps.map((step, i) => (
            <Grid key={step} size={{ xs: 12, sm: 6, md: 3 }}>
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
                    top: 12,
                    right: 16,
                    lineHeight: 1,
                  }}
                >
                  {stepNumbers[i]}
                </Typography>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {t(`process.${step}.title`)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t(`process.${step}.description`)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
