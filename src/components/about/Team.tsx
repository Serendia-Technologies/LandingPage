'use client';

import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';

const teamMembers = ['member1', 'member2', 'member3'] as const;

export default function Team() {
  const t = useTranslations('about');

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          {t('teamTitle')}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid key={member} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: '#ffffff',
                  borderRadius: 2,
                  border: '1px solid rgba(0,0,36,0.06)',
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  {t(`team.${member}.name`).charAt(0)}
                </Avatar>
                <Typography variant="h4" sx={{ mb: 0.5 }}>
                  {t(`team.${member}.name`)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main', mb: 1 }}>
                  {t(`team.${member}.role`)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t(`team.${member}.bio`)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
