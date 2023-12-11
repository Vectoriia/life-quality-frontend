import { PatientStatus } from "@/enums";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaHeartCircleExclamation } from "react-icons/fa6";

const getStatusIcon = (status: PatientStatus, size?: number) => {
  switch (status) {
    case PatientStatus.Stable:
      return <FaHeartCircleCheck size={size || 33} className="text-green" />;
    case PatientStatus.Unstable:
      return (
        <FaHeartCircleExclamation size={size || 33} className="text-red-600" />
      );
  }
};

export default getStatusIcon;
