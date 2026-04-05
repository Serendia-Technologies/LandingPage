import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import TransformOutlinedIcon from '@mui/icons-material/TransformOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import type { SvgIconComponent } from '@mui/icons-material';

export interface ServiceDefinition {
  slug: string;
  icon: SvgIconComponent;
  translationKey: string;
  order: number;
}

export const services: ServiceDefinition[] = [
  {
    slug: 'ai-adoption',
    icon: SmartToyOutlinedIcon,
    translationKey: 'aiAdoption',
    order: 1,
  },
  {
    slug: 'edge-ai',
    icon: MemoryOutlinedIcon,
    translationKey: 'edgeAi',
    order: 2,
  },
  {
    slug: 'digital-transformation',
    icon: TransformOutlinedIcon,
    translationKey: 'digitalTransformation',
    order: 3,
  },
  {
    slug: 'marketing',
    icon: CampaignOutlinedIcon,
    translationKey: 'marketing',
    order: 4,
  },
  {
    slug: 'analytics-bi',
    icon: BarChartOutlinedIcon,
    translationKey: 'analyticsBi',
    order: 5,
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
