"use client"
import useTypedSession from "@/hooks/use-typed-session";
import DoctorProfileView from "@/page-views/doctor-profile-view";
import PatientProfileView from "@/page-views/patient-profile-view";

const PatientPage: React.FC = () => {
    const { data, status } = useTypedSession();
    if ((data.userData.role as number) == 1) return <PatientProfileView />;

    return (
        <DoctorProfileView />
    )
};

export default PatientPage;