export async function getServerSideProps() {
    return { props: { time: new Date().toISOString() } };
}

export default function Home({ time }) {
    return <div><h1>Home Page</h1><p>Rendered at: {time}</p></div>;
}
