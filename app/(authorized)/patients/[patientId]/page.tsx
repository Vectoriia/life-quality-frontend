import PatientPageView from "@/page-views/patient-page-view";

interface Props {
    params: { patientId: string };
}

const PatientInfo: React.FC<Props> = ({
    params,
}) => {
    return (
        <PatientPageView />
    )
}

export default PatientInfo;