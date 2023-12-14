import { useDispatch } from 'react-redux';

import { AppDispatch } from 'core/store/index';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
