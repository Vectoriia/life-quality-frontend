import AnalysisPageView from "@/page-views/analysis-page-view";

interface Props {
    params: { analysisId: string };
}

const AnalysisInfo: React.FC<Props> = ({
    params,
}) => {
    return (
        <AnalysisPageView />
    )
}

export default AnalysisInfo;