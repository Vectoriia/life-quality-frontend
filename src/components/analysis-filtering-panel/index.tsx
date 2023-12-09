'use client'
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AnalysisFilteringPanel: React.FC = () => {
    const path = usePathname();
    return (
        <div className="mx-4">
            <Link 
                className={clsx(
                  'no-underline flex items-center bg-white px-5 rounded-sm gap-2',
                )}
                href={`/${path}?requestAnalysis`}
              >
                <BsFillPlusCircleFill className="text-blue" />
                <Typography variant="body2">Створити аналіз</Typography>
              </Link>
            <Typography className="font-[600] mt-6 mb-3" >Фільтрувати:</Typography>
            <div className="bg-white p-3">
                <Typography variant="h6" className="mb-1 uppercase py-2">Джерело аналізу</Typography>
                <FormGroup className="[&>*]:mx-0 [&>*]:mb-1 [&>*]:py-1 [&>*]:gap-1">
                    <FormControlLabel control={<Checkbox />} label="Одноразовий запит" />
                    <FormControlLabel control={<Checkbox />} label="Регулярний запит" />
                </FormGroup>
                <Divider className="my-1" />
                <Typography variant="h6" className="mb-1 uppercase py-2">Тип аналізу</Typography>
                <FormGroup className="[&>*]:mx-0 [&>*]:mb-1 [&>*]:py-1 [&>*]:gap-1">
                    <FormControlLabel control={<Checkbox />} label="Холестерин" />
                    <FormControlLabel control={<Checkbox />} label="Цукор" />
                    <FormControlLabel control={<Checkbox />} label="ЗАК" />
                </FormGroup>
            </div>
        </div>
    )
}

export default AnalysisFilteringPanel;