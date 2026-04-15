export async function getServerSideProps() {
    return { props: { time: new Date().toISOString() } };
}

export default function About({ time }) {
    return <div><h1>About Page</h1><p>Rendered at: {time}</p></div>;
}
