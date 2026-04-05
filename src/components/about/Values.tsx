'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useTranslations } from 'next-intl';

const values = [
  { key: 'innovation', icon: LightbulbOutlinedIcon },
  { key: 'collaboration', icon: GroupsOutlinedIcon },
  { key: 'impact', icon: TrackChangesOutlinedIcon },
  { key: 'integrity', icon: VerifiedOutlinedIcon },
];

export default function Values() {
  const t = useTranslations('about');

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          {t('valuesTitle')}
        </Typography>

        <Grid container spacing={3}>
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Grid key={v.key} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
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
                    {t(`values.${v.key}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t(`values.${v.key}.description`)}
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
