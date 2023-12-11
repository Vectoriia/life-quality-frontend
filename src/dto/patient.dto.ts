import { PatientStatus } from "@/enums";
import { SmallAnalysisDto } from "./analysis.dto";

export interface UserDto {
  name: string;
  phoneNumber: string;
  email: string;
  profilePicture?: string;
}

export interface PatientInfoDto extends UserDto {
  doctorName: string;
  patientStatus: PatientStatus;
  patientStatusDescription: string;
  analysis: SmallAnalysisDto[];
}

export interface DoctorProfileDto extends UserDto {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface PatientProfileDto extends PatientInfoDto {
  recommendations: ShortRecommendationDto[];
}

export interface ShortRecommendationDto {
  analysis: SmallAnalysisDto;
  receivedAt: string;
  content: string;
}