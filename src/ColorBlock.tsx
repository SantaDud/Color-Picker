interface Props{
    color:string;
}

const ColorBlock: React.FC<Props> = ({ color }) => {
    return <div className="block" style={{backgroundColor: color}}></div>;
};

export default ColorBlock;