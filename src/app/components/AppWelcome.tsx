export default function AppWelcome(){
    const title = 'Welcome to Cosci';
    const currentYear = <p>2025</p>
    const isShow = true;

    return (
        <>
        <p> {title.toUpperCase()}</p>
        {currentYear}
        {
            isShow && <p>Date: 10/10/1998</p>
        }
        {
            isShow ? <p> Hello Next.js </p> : <p> Hello Javascript </p>
        }
        </>
    );
}