import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({list})=> {
    return(
        <div className="container">
            {
                list.map((singleEmoji,index) => {
            return(
                <SingleEmoji key={index} singleEmoji={singleEmoji} />
            )})
            }
        </div>
    )
}
export default EmojiContainer;