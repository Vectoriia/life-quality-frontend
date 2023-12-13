import { Typography } from "@mui/material";
import { FiPhoneCall } from "react-icons/fi";
import { DoctorProfileDto } from "@/dto";
import { PeopleAvatar } from "@/components";
import { MdAlternateEmail } from "react-icons/md";
import { useGetUsersDoctorProfileByIdQuery } from "core/api/baseApi";
import useTypedSession from "@/hooks/use-typed-session";

const DoctorProfileView: React.FC = () => {
  const { data: sessionData } = useTypedSession();
  const { data } = useGetUsersDoctorProfileByIdQuery({
    id: sessionData.userData.id as number,
  });

  if (!data) {
    return null;
  }

  return (
    <div className="relative flex flex-col w-screen items-center">
      <div className="flex flex-col mt-[60px] bg-white rounded-lg py-4 px-6 w-[70%]">
        <Typography variant="h4" className="mb-2">
          {data.name}
        </Typography>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col gap-1 [&>*]:flex [&>*]:items-center [&>*]:gap-2 ">
            <Typography>
              <FiPhoneCall size={24} />
              {data.phoneNumber}
            </Typography>
            <Typography>
              <MdAlternateEmail size={24} />
              {data.email}
            </Typography>
          </div>
          <div className="flex mr-6">
            <PeopleAvatar avatarSx={{ width: '120px', height: '120px' }}  svgSize={120} src={data.profilePicture || ''} />
          </div>
        </div>
        <div>
          <Typography>
            {data.doctorSpeciality}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfileView;