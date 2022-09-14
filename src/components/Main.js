import emojiList from "../emojiList";
import {useEffect, useState} from 'react';
import EmojiContainer from "./EmojiContainer";


const Main = ()=>{
    const [list, setList] = useState(emojiList);
    const [keyword, setKeyword] = useState("");
    const typed = (e) => {
        //console.log(e);
        const value = e.target.value.toLowerCase();
        setKeyword(value);
    }
    
    useEffect(_=>{
        //console.log(`Keyword changed - ${keyword}`);
        const filterList = emojiList.filter(singleEmoji => {
            if(singleEmoji.description.startsWith(keyword)){
                return true;
            }
            if(singleEmoji.aliases.some(e => e.startsWith(keyword))){
                return true;
            }
        });
        setList(filterList);
    },[keyword]);
    //console.log(list);
    //console.log(setList);
    return(
        <div>
            <h2 className="search">
                <input type="text" placeholder="Filter  🔍" onKeyUp={typed}/>
                {
                    list.length === 0 ? (<p>No Emoji found</p>) :
                    (
                        <>
                        {keyword === ""?false:<h3>Result for - {keyword}</h3>}
                        <hr/>
                        <EmojiContainer list={list} />
                        </>
                    )
                }
            </h2>
        </div>
    )
}

export default Main;