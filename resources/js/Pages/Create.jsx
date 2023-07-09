import Cover from "@/Components/Cover";
import Registration from "@/Components/Registration";

export default function Create(props) {
    console.log((props))

    return <div className={"grid grid-cols-1 lg:grid-cols-2 min-h-screen"}><Cover/> <Registration countries={props.countries}/> </div>;
}
