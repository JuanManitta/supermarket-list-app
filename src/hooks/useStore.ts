import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



const useStore = () => {
    const storeData = useSelector((state: RootState) => state);
    return storeData;
}

export default useStore;