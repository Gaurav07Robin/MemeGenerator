import react from "react";
import { useHistory, useLocation } from "react-router";
import styles from './styles.module.css';
export const MemeGenerated = () => {
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    
    return(
        <>
        <div className={styles.container}>
            <button onClick={() => history.push('/service')} className={StyleSheet.home}>
               Make more Memes
                </button>
            {url && <img src={url} alt="meme"/>}
        </div>
        </>
    );
};

export default MemeGenerated;