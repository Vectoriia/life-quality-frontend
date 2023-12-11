import { ShortCreateAnalysisDto } from "@/components/forms/CreateAnalysForm/types";

export interface IConfigAnalysModalProps {
  analys: ShortCreateAnalysisDto;
  open: boolean;
  onClose: () => void;
}
