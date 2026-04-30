import { allData } from "@/lib/data";

const TopAnimal = async() => {
    const data =await allData()
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
};

export default TopAnimal;