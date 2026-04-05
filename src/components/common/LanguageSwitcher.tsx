'use client';

import { useState, useEffect } from 'react';
import { Fab, Menu, MenuItem, Typography, Box } from '@mui/material';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { locales, localeNames, localeFlags, localeCodes, Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    localStorage.setItem('NEXT_LOCALE', locale);
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
  }, [locale]);

  const handleSwitch = (newLocale: Locale) => {
    localStorage.setItem('NEXT_LOCALE', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.replace(pathname, { locale: newLocale });
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        aria-label="Change language"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          position: 'fixed',
          top: { xs: 12, md: 20 },
          right: { xs: 12, md: 32 },
          zIndex: 1300,
          bgcolor: '#000024',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.8rem',
          width: 44,
          height: 44,
          '&:hover': {
            bgcolor: '#1b679e',
          },
        }}
      >
        {localeCodes[locale]}
      </Fab>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 180,
              bgcolor: '#000024',
              color: '#ffffff',
              border: '1px solid rgba(65,167,237,0.2)',
            },
          },
        }}
      >
        {locales.map((loc) => (
          <MenuItem
            key={loc}
            selected={loc === locale}
            onClick={() => handleSwitch(loc)}
            sx={{
              gap: 1.5,
              py: 1.2,
              '&.Mui-selected': {
                bgcolor: 'rgba(65,167,237,0.15)',
              },
              '&:hover': {
                bgcolor: 'rgba(65,167,237,0.1)',
              },
            }}
          >
            <Box
              component="span"
              className={`fi ${localeFlags[loc]}`}
              sx={{ fontSize: '1.2rem', lineHeight: 1 }}
            />
            <Typography variant="body2">{localeNames[loc]}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
