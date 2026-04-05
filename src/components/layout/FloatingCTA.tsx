'use client';

import { Fab, Tooltip } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export default function FloatingCTA() {
  const t = useTranslations('nav');
  const router = useRouter();

  return (
    <Tooltip title={t('cta')} placement="left">
      <Fab
        color="primary"
        aria-label={t('cta')}
        onClick={() => router.push('/contact')}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1200,
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
        }}
      >
        <ChatOutlinedIcon />
      </Fab>
    </Tooltip>
  );
}
