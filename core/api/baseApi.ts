import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postAuthenticationLogin: build.mutation<
      PostAuthenticationLoginApiResponse,
      PostAuthenticationLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/authentication/Login`,
        method: "POST",
        body: queryArg.userLogInRequest,
      }),
    }),
    getBloodAnalysisByDoctorByDoctorId: build.query<
      GetBloodAnalysisByDoctorByDoctorIdApiResponse,
      GetBloodAnalysisByDoctorByDoctorIdApiArg
    >({
      query: (queryArg) => ({
        url: `/blood-analysis/by-doctor/${queryArg.doctorId}`,
      }),
    }),
    getBloodAnalysisById: build.query<
      GetBloodAnalysisByIdApiResponse,
      GetBloodAnalysisByIdApiArg
    >({
      query: (queryArg) => ({ url: `/blood-analysis/${queryArg.id}` }),
    }),
    postBloodAnalysisCreateScheduleOfRequest: build.mutation<
      PostBloodAnalysisCreateScheduleOfRequestApiResponse,
      PostBloodAnalysisCreateScheduleOfRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/blood-analysis/CreateScheduleOfRequest`,
        method: "POST",
        body: queryArg.scheduledAnalysisRequest,
      }),
    }),
    postBloodAnalysisCreateRequest: build.mutation<
      PostBloodAnalysisCreateRequestApiResponse,
      PostBloodAnalysisCreateRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/blood-analysis/CreateRequest`,
        method: "POST",
        body: queryArg.analysisRequest,
      }),
    }),
    getUsersPatients: build.query<
      GetUsersPatientsApiResponse,
      GetUsersPatientsApiArg
    >({
      query: (queryArg) => ({
        url: `/users/patients`,
        params: { filterByName: queryArg.filterByName },
      }),
    }),
    getUsersPatientsAutocomplete: build.query<
      GetUsersPatientsAutocompleteApiResponse,
      GetUsersPatientsAutocompleteApiArg
    >({
      query: (queryArg) => ({
        url: `/users/patients-autocomplete`,
        params: { filterByName: queryArg.filterByName },
      }),
    }),
    getUsersPatientById: build.query<
      GetUsersPatientByIdApiResponse,
      GetUsersPatientByIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/patient/${queryArg.id}` }),
    }),
    getUsersDoctorProfileById: build.query<
      GetUsersDoctorProfileByIdApiResponse,
      GetUsersDoctorProfileByIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/doctor-profile/${queryArg.id}` }),
    }),
    getUsersPatientProfileById: build.query<
      GetUsersPatientProfileByIdApiResponse,
      GetUsersPatientProfileByIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/patient-profile/${queryArg.id}` }),
    }),
    postUsersRecomendation: build.mutation<
      PostUsersRecomendationApiResponse,
      PostUsersRecomendationApiArg
    >({
      query: (queryArg) => ({
        url: `/users/recomendation`,
        method: "POST",
        body: queryArg.recomendationRequest,
      }),
    }),
    postUsersPatient: build.mutation<
      PostUsersPatientApiResponse,
      PostUsersPatientApiArg
    >({
      query: () => ({ url: `/users/patient`, method: "POST" }),
    }),
    postUsersDoctor: build.mutation<
      PostUsersDoctorApiResponse,
      PostUsersDoctorApiArg
    >({
      query: () => ({ url: `/users/doctor`, method: "POST" }),
    }),
    getUsersNotifications: build.query<
      GetUsersNotificationsApiResponse,
      GetUsersNotificationsApiArg
    >({
      query: () => ({ url: `/users/notifications` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as baseApi };
export type PostAuthenticationLoginApiResponse =
  /** status 200 Success */ AuthenticateResponse;
export type PostAuthenticationLoginApiArg = {
  userLogInRequest: UserLogInRequest;
};
export type GetBloodAnalysisByDoctorByDoctorIdApiResponse =
  /** status 200 Success */ SmallAnalysisDto[];
export type GetBloodAnalysisByDoctorByDoctorIdApiArg = {
  doctorId: number;
};
export type GetBloodAnalysisByIdApiResponse =
  /** status 200 Success */ AnalysisInfoDto;
export type GetBloodAnalysisByIdApiArg = {
  id: number;
};
export type PostBloodAnalysisCreateScheduleOfRequestApiResponse = unknown;
export type PostBloodAnalysisCreateScheduleOfRequestApiArg = {
  scheduledAnalysisRequest: ScheduledAnalysisRequest;
};
export type PostBloodAnalysisCreateRequestApiResponse = unknown;
export type PostBloodAnalysisCreateRequestApiArg = {
  analysisRequest: AnalysisRequest;
};
export type GetUsersPatientsApiResponse =
  /** status 200 Success */ PatientDto[];
export type GetUsersPatientsApiArg = {
  filterByName?: string;
};
export type GetUsersPatientsAutocompleteApiResponse =
  /** status 200 Success */ FastEntityDto[];
export type GetUsersPatientsAutocompleteApiArg = {
  filterByName?: string;
};
export type GetUsersPatientByIdApiResponse =
  /** status 200 Success */ PatientInfoDto;
export type GetUsersPatientByIdApiArg = {
  id: number;
};
export type GetUsersDoctorProfileByIdApiResponse =
  /** status 200 Success */ DoctorProfileDto;
export type GetUsersDoctorProfileByIdApiArg = {
  id: number;
};
export type GetUsersPatientProfileByIdApiResponse =
  /** status 200 Success */ PatientProfileDto;
export type GetUsersPatientProfileByIdApiArg = {
  id: number;
};
export type PostUsersRecomendationApiResponse = unknown;
export type PostUsersRecomendationApiArg = {
  recomendationRequest: RecomendationRequest;
};
export type PostUsersPatientApiResponse = unknown;
export type PostUsersPatientApiArg = void;
export type PostUsersDoctorApiResponse = unknown;
export type PostUsersDoctorApiArg = void;
export type GetUsersNotificationsApiResponse =
  /** status 200 Success */ NotificationDto[];
export type GetUsersNotificationsApiArg = void;
export type UserType = 0 | 1 | 2;
export type AuthenticateResponse = {
  id?: number;
  name?: string | null;
  jwtToken?: string | null;
  role?: UserType;
};
export type UserLogInRequest = {
  email?: string | null;
  password?: string | null;
};
export type AnalysisStatus = 0 | 1 | 2;
export type SmallAnalysisDto = {
  id?: number;
  analysisType?: string | null;
  patientName?: string | null;
  receivedAt?: string;
  isRegular?: boolean;
  status?: AnalysisStatus;
};
export type AnalysisInfoDto = {
  type?: string | null;
  patientName?: string | null;
  dateTime?: string | null;
  status?: AnalysisStatus;
  description?: string | null;
  files?: string[] | null;
};
export type IntervalType = 0 | 1 | 2 | 3 | 4;
export type ScheduledAnalysisRequest = {
  patientName?: string | null;
  analysisType?: string | null;
  comment?: string | null;
  interval?: IntervalType;
  startDate?: string;
  endDate?: string | null;
};
export type AnalysisRequest = {
  patientName?: string | null;
  analysisType?: string | null;
  comment?: string | null;
};
export type PatientDto = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  profilePicture?: string | null;
  id?: number;
  address?: string | null;
};
export type FastEntityDto = {
  id?: number;
  name?: string | null;
};
export type PatientStatus = 0 | 1;
export type PatientInfoDto = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  profilePicture?: string | null;
  doctorName?: string | null;
  patientStatus?: PatientStatus;
  patientStatusDescription?: string | null;
  analysis?: SmallAnalysisDto[] | null;
};
export type DoctorProfileDto = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  profilePicture?: string | null;
  doctorSpeciality?: string | null;
};
export type ShortRecommendationDto = {
  analysis?: SmallAnalysisDto;
  receivedAt?: string | null;
  content?: string | null;
};
export type PatientProfileDto = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  profilePicture?: string | null;
  doctorName?: string | null;
  patientStatus?: PatientStatus;
  patientStatusDescription?: string | null;
  analysis?: SmallAnalysisDto[] | null;
  recommendations?: ShortRecommendationDto[] | null;
};
export type RecomendationRequest = {
  receiverName?: string | null;
  analysisId?: number;
  message?: string | null;
};
export type NotificationType = 0 | 1;
export type NotificationDto = {
  id?: number;
  title?: string | null;
  notificationType?: NotificationType;
};
export const {
  usePostAuthenticationLoginMutation,
  useGetBloodAnalysisByDoctorByDoctorIdQuery,
  useGetBloodAnalysisByIdQuery,
  usePostBloodAnalysisCreateScheduleOfRequestMutation,
  usePostBloodAnalysisCreateRequestMutation,
  useGetUsersPatientsQuery,
  useGetUsersPatientsAutocompleteQuery,
  useGetUsersPatientByIdQuery,
  useGetUsersDoctorProfileByIdQuery,
  useGetUsersPatientProfileByIdQuery,
  usePostUsersRecomendationMutation,
  usePostUsersPatientMutation,
  usePostUsersDoctorMutation,
  useGetUsersNotificationsQuery,
} = injectedRtkApi;
