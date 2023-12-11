import { RecommendationDto } from '@/dto';

export interface IRecommendationModalProps {
  recommendation: RecommendationDto;
  open: boolean;
  onClose: () => void;
}
