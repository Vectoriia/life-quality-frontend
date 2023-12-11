export interface CreateRecommendationDto {
  patientName: string;
  doctorName: string;
  details: string;
}
export interface RecommendationDto extends CreateRecommendationDto {
  createDate: Date;
}
