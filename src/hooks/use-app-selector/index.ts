import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'core/store/index';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
