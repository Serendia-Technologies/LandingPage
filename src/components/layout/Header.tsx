'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services/ai-adoption' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations('nav');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#000024',
          borderBottom: '1px solid rgba(65,167,237,0.15)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: 1,
                }}
              >
                Serendia
              </Typography>
            </Link>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.key}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: '#ffffff',
                      opacity: pathname === item.href ? 1 : 0.75,
                      borderBottom:
                        pathname === item.href
                          ? '2px solid #41a7ed'
                          : '2px solid transparent',
                      borderRadius: 0,
                      px: 2,
                      '&:hover': {
                        opacity: 1,
                        bgcolor: 'rgba(65,167,237,0.08)',
                      },
                    }}
                  >
                    {t(item.key)}
                  </Button>
                ))}
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2 }}
                >
                  {t('cta')}
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#000024',
            color: '#ffffff',
            width: 280,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderLeft:
                    pathname === item.href
                      ? '3px solid #41a7ed'
                      : '3px solid transparent',
                }}
              >
                <ListItemText primary={t(item.key)} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setDrawerOpen(false)}
            >
              {t('cta')}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
