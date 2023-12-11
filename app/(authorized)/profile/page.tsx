"use client"
import DoctorProfileView from "@/page-views/doctor-profile-view";
import PatientProfileView from "@/page-views/patient-profile-view";
import { useState } from "react";

const PatientPage: React.FC = () => {
    const [isPatient, setIsPatient] = useState(false);

    if (isPatient) return <PatientProfileView />;

    return (
        <DoctorProfileView />
    )
};

export default PatientPage;