import PatientPageView from "@/page-views/patient-page-view";

interface Props {
    params: { patientId: number };
}

const PatientInfo: React.FC<Props> = ({
    params,
}) => {
    return (
        <PatientPageView patientId={params.patientId}/>
    )
}

export default PatientInfo;