'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useTranslations } from 'next-intl';

export default function CompanyStory() {
  const t = useTranslations('about');

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(135deg, #000024 0%, #1b679e 100%)',
        color: '#ffffff',
        py: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <AutoAwesomeOutlinedIcon sx={{ color: '#41a7ed', fontSize: 28 }} />
              <Typography variant="body1" sx={{ color: '#41a7ed', fontWeight: 600 }}>
                {t('storyLabel')}
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ mb: 3, lineHeight: 1.15 }}>
              {t('storyTitle')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, opacity: 0.9, mb: 3 }}
            >
              {t('storyP1')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, opacity: 0.9 }}
            >
              {t('storyP2')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
