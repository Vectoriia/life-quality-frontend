import { RecommendationDto } from "core/api/baseApi";

export interface IRecommendationModalProps {
  recommendation: RecommendationDto;
  open: boolean;
  onClose: () => void;
}
