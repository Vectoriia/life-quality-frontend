import AnalysisPageView from "@/page-views/analysis-page-view";

interface Props {
    params: { analysisId: number };
}

const AnalysisInfo: React.FC<Props> = ({
    params,
}) => {
    return (
        <AnalysisPageView analysisId={params.analysisId} />
    )
}

export default AnalysisInfo;