'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslations } from 'next-intl';
import type { ServiceDefinition } from '@/data/services';

interface Props {
  service: ServiceDefinition;
}

const benefitKeys = ['b1', 'b2', 'b3', 'b4'];

export default function ServiceBenefits({ service }: Props) {
  const t = useTranslations(`serviceDetail.${service.translationKey}`);

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          {t('benefitsTitle')}
        </Typography>

        <Grid container spacing={3}>
          {benefitKeys.map((key) => (
            <Grid key={key} size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                  bgcolor: '#ffffff',
                  borderRadius: 2,
                  border: '1px solid rgba(0,0,36,0.06)',
                  height: '100%',
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ color: 'primary.main', fontSize: 28, mt: 0.25 }}
                />
                <Box>
                  <Typography variant="h4" sx={{ mb: 0.5 }}>
                    {t(`benefits.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t(`benefits.${key}.description`)}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
