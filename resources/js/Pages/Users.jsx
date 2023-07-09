export default function Users({users}) {
    const title = "Users Data Table";
    const tableHeading = ["Name","Country","Date Of Birth"];

    const tableData = users;

    const alignment = ["left","center","right"];

    const contentAlgnment =(index) => alignment[index]

    const renderHeadingElements = (data)=>{
        return data.map((value,index)=> <div className={"data-table-element p-5 mx-0 lg:mx-2 rounded-2xl text-white lg:bg-[#58AF9B]"} style={{textAlign:contentAlgnment(index),fontSize:"18px"}} key={index}>{value}</div> )



    }

    return <>
        <h1 style={{
            color: "#58AF9B",
            fontSize: "44.744px",
        }} className={"mt-5 text-center"}>{title}</h1>


        <div className={"container data-table grid grid-cols-1 mx-auto gap-0"}>
            <div className="data-table-heading grid grid-cols-3 rounded-2xl bg-[#58AF9B] lg:bg-transparent">
                {renderHeadingElements(tableHeading)}
            </div>

            {tableData.map((data,index)=><div className={"data-table-content grid grid-cols-3 p-4 my-2 rounded-2xl"} style={{backgroundColor:"#E1F8F6"}} key={index}>
                <div className={"data-table-content-element text-left"} style={{color:"#4B4F4E"}}>{data.name}</div>
                <div className={"data-table-content-element text-center"}style={{color:"#4B4F4E"}}>{data.country_name}</div>
                <div className={"data-table-content-element text-right"}style={{color:"#4B4F4E"}}>{data.birthdate}</div>
            </div>)}

        </div>



    </>;
}
