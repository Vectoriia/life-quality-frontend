import { AnalysisStatus } from "@/enums";

export interface AnalysisDto { // for analysis main table
  id: number;
  type?: string;
  patientName: string;
  receivedAt: string;
  status: AnalysisStatus;
}

export interface AnalysisInfoDto { // for analysis page
  type: string;
  patientName: string;
  dateTime: string;
  status: AnalysisStatus;
  description: string;
  files: string[];
}

export interface SmallAnalysisDto { // for patient page table
  analysisType: string;
  receivedAt: string;
  isRegular: boolean;
  status: AnalysisStatus;
}
