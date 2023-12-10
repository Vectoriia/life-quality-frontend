import { AnalysisStatus } from "@/page-views/analysis-view";
import { BiSolidHourglass } from "react-icons/bi";
import { IoMdCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

const getStatusIcon = (status: AnalysisStatus, size?: number) => {
    switch(status){
        case AnalysisStatus.Done: return <IoMdCheckmarkCircle size={size || 33} className="text-green"/>;
        case AnalysisStatus.Failed: return <IoIosCloseCircle size={size || 33} className="text-red-600"/>
        case AnalysisStatus.Pending: return <BiSolidHourglass size={size || 33} className="text-yellow-600"/>
    }
}

export default getStatusIcon;