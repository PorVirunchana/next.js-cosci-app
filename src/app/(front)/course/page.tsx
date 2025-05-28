import Features05Page from "@/components/features-05/features-05";

export default async function course(){
    const data = await fetch('https:api.codingthailand.com/api/course',{cache :'no-store'}); //revalidate = cachทุกๆ1ชม.
    const courses = await data.json();
    return (
        <>
            {
                courses && <Features05Page courses = {courses.data}/>
            }
        </>
    );
}