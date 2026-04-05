'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslations } from 'next-intl';

const testimonialKeys = ['t1', 't2', 't3'] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonialKeys.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonialKeys.length - 1 ? 0 : c + 1));

  const key = testimonialKeys[current];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          {t('title')}
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            bgcolor: '#ffffff',
            borderRadius: 3,
            border: '1px solid rgba(0,0,36,0.06)',
            position: 'relative',
          }}
        >
          <FormatQuoteIcon
            sx={{
              fontSize: 48,
              color: 'primary.main',
              opacity: 0.3,
              mb: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 3,
              fontStyle: 'italic',
              color: 'text.primary',
            }}
          >
            &ldquo;{t(`items.${key}.quote`)}&rdquo;
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {t(`items.${key}.name`)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t(`items.${key}.role`)}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
            <IconButton onClick={prev} sx={{ border: '1px solid rgba(0,0,36,0.1)' }}>
              <ChevronLeftIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {testimonialKeys.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: i === current ? 'primary.main' : 'rgba(0,0,36,0.15)',
                    transition: 'background-color 0.2s',
                  }}
                />
              ))}
            </Box>
            <IconButton onClick={next} sx={{ border: '1px solid rgba(0,0,36,0.1)' }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
