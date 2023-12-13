import { ShortCreateRecommendationDto } from "@/components/forms/CreateRecommendationForm/types";

export interface ICreateRecommendationModalProps {
  initialValues: ShortCreateRecommendationDto;
  open: boolean;
  onClose: () => void;
}
