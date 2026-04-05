'use client';

import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { services } from '@/data/services';

export default function ServicesOverview() {
  const t = useTranslations('servicesOverview');

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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Grid key={service.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  component={Link}
                  href={`/services/${service.slug}`}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 32px rgba(0,0,36,0.12)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: 'rgba(65,167,237,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 32, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h3" sx={{ mb: 1.5, color: 'text.primary' }}>
                      {t(`items.${service.translationKey}.title`)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', flexGrow: 1 }}
                    >
                      {t(`items.${service.translationKey}.description`)}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mt: 2,
                        color: 'primary.main',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                      }}
                    >
                      {t('learnMore')}
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
