import { PatientStatus } from "@/enums";
import { SmallAnalysisDto } from "./analysis.dto";

export interface PatientInfoDto {
  name: string;
  doctorName: string;
  patientStatus: PatientStatus;
  patientStatusDescription: string;
  phoneNumber: string;
  email: string;
  analysis: SmallAnalysisDto[];
}