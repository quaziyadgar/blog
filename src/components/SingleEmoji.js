import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';

const SingleEmoji = ({singleEmoji}) => {
    const [isCopied, setCopy] = useState(false);

    useEffect(_=>{
        if(isCopied)
        {
            setTimeout(_=>{
                setCopy(false);
            },1500)
        }
    },[isCopied])


    return(
        <CopyToClipboard text={singleEmoji.emoji} onCopy={_=>setCopy(true)}>
        <div className="item">
            <p className="emoji">{isCopied?"✅":singleEmoji.emoji}</p>
            <p>{singleEmoji.description}</p>
        </div>
        </CopyToClipboard>
    )
}
export default SingleEmoji;