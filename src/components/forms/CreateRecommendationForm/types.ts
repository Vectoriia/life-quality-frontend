export interface ShortCreateRecommendationDto {
  receiverName: string;
  analysisId: number;
  recommendation: string;
}
export interface ICreateRecommendationFormData {
  recommendation: string | null;
}

export interface ICreateRecommendationFormProps {
  initialValues: ShortCreateRecommendationDto;
  onClose: () => void;
}
