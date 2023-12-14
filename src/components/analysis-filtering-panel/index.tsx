'use client'
import useAppDispatch from "@/hooks/use-app-dispatch";
import useAppSelector from "@/hooks/use-app-selector";
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import clsx from "clsx";
import { setIsRegularFilter, setIsCholFilter, setIsGenFilter, setIsSingleFilter, setIsSugFilter } from "core/store/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AnalysisFilteringPanel: React.FC = () => {
    const path = usePathname();
    const dispatch = useAppDispatch();
    const handleIsRegChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsRegularFilter(event.target.checked));
    };
    const handleIsSingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsSingleFilter(event.target.checked));
    };
    const handleIsCholChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsCholFilter(event.target.checked));
    };
    const handleIsSugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsSugFilter(event.target.checked));
    };
    const handleIsGenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsGenFilter(event.target.checked));
    };
    return (
        <div className="mx-4">
            <Link 
                className={clsx(
                  'no-underline flex items-center bg-white px-5 rounded-sm gap-2',
                )}
                href={`/analysis?requestAnalysis`}
              >
                <BsFillPlusCircleFill className="text-blue" />
                <Typography variant="body2">Створити аналіз</Typography>
              </Link>
            <Typography className="font-[600] mt-6 mb-3" >Фільтрувати:</Typography>
            <div className="bg-white p-3">
                <Typography variant="h6" className="mb-1 uppercase py-2">Джерело аналізу</Typography>
                <FormGroup className="[&>*]:mx-0 [&>*]:mb-1 [&>*]:py-1 [&>*]:gap-1">
                    <FormControlLabel control={<Checkbox onChange={handleIsSingChange} />} label="Одноразовий запит" />
                    <FormControlLabel control={<Checkbox onChange={handleIsRegChange} />} label="Регулярний запит" />
                </FormGroup>
                <Divider className="my-1" />
                <Typography variant="h6" className="mb-1 uppercase py-2">Тип аналізу</Typography>
                <FormGroup className="[&>*]:mx-0 [&>*]:mb-1 [&>*]:py-1 [&>*]:gap-1">
                    <FormControlLabel control={<Checkbox onChange={handleIsCholChange} />} label="Холестерин" />
                    <FormControlLabel control={<Checkbox onChange={handleIsSugChange} />} label="Цукор" />
                    <FormControlLabel control={<Checkbox onChange={handleIsGenChange} />} label="ЗАК" />
                </FormGroup>
            </div>
        </div>
    )
}

export default AnalysisFilteringPanel;